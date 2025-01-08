import { useEffect, useState } from "react";
import useTodoService, { IListTodosInput } from "./todo.service";
import { ITodo } from "./todo.service.interfaces";

export default function useTodoController() {
  const { list } = useTodoService();

  const [search, setSearch] = useState("");

  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  async function handleTodoList(params?: IListTodosInput) {
    const response = await list(params);
    setTodos(response.items);
  }

  useEffect(() => {
    handleTodoList({
      search,
    });
  }, [search]);

  return {
    search,
    handleSearch,
    todos,
    refetch: handleTodoList,
  };
}
