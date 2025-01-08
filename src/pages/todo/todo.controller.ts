import { useEffect, useState } from "react";
import useTodoService, { IListTodosInput } from "./todo.service";
import { ITodo, PriorityEnum } from "./todo.service.interfaces";
import {
  filterTodoSchema,
  FilterTodoSchemaType,
} from "./components/filters/todo-filters.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function useTodoController() {
  const { list } = useTodoService();

  const { register, handleSubmit, watch } = useForm<FilterTodoSchemaType>({
    resolver: zodResolver(filterTodoSchema),
  });

  const search = watch("search");

  const priority = watch("priority") as PriorityEnum;

  const done = watch("done");

  const [todos, setTodos] = useState<ITodo[]>([]);

  async function handleTodoList(params?: IListTodosInput) {
    const response = await list(params);
    setTodos(response.items);
  }

  useEffect(() => {
    handleTodoList({
      search,
      priority,
      done: Boolean(done),
    });
  }, [search, priority, done]);

  return {
    register,
    handleSubmit,
    todos,
    refetch: handleTodoList,
  };
}
