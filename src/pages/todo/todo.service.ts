import { todoApi } from "../../@shared/api";
import { CreateTodoInputType } from "./create-todo.schema";
import { ITodo } from "./todo.service.interfaces";

export default function useTodoService() {
  async function list() {
    const response = await todoApi.get<ITodo[]>("/todos");
    return response.data;
  }

  async function create(data: CreateTodoInputType) {
    await todoApi.post("/todos", data);
  }

  async function detail(id: string) {
    const response = await todoApi.get<ITodo>(`/todos/${id}`);
    return response.data;
  }

  async function update(id: string, data: Partial<CreateTodoInputType>) {
    await todoApi.patch(`/todos/${id}`, data);
  }

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
