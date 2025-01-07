import { useEffect, useState } from "react";
import useTodoService from "./todo.service";
import { ITodo } from "./todo.service.interfaces";

export default function useTodoController() {
  const { list } = useTodoService();

  const [todos, setTodos] = useState<ITodo[]>([]);

  async function handleTodoList() {
    const response = await list();
    setTodos(response.items);
  }

  useEffect(() => {
    handleTodoList();
  }, []);

  return {
    todos,
  };
}
