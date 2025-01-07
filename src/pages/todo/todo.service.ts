import { todoApi } from "../../api";
import { ITodo } from "./todo.service.interfaces";

export default function useTodoService() {
  async function list() {
    const response = await todoApi.get<ITodo[]>("/todos");
    return response;
  }

  async function create() {}

  async function detail(id: string) {
    const response = await todoApi.get<ITodo>(`/todos/${id}`);
    return response;
  }

  async function update() {}

  async function del(id: string) {
    const response = await todoApi.delete(`/todos/${id}`);
    return response;
  }

  return {
    list,
    create,
    detail,
    update,
    del,
  };
}
