import { todoApi } from "../../@shared/api";
import { IListOutput } from "../../@shared/interfaces/list-output.interfaces";
import { CreateTodoInputType } from "./components/card_area/components/card-creation-form/create-todo.schema";
import { ITodo } from "./todo.service.interfaces";

interface IUpdateTodoInput extends Partial<CreateTodoInputType> {
  done?: boolean;
}

export default function useTodoService() {
  async function list() {
    const response = await todoApi.get<IListOutput<ITodo>>("/todos");
    return response.data;
  }

  async function create(data: CreateTodoInputType) {
    await todoApi.post("/todos", data);
  }

  async function detail(id: string) {
    const response = await todoApi.get<ITodo>(`/todos/${id}`);
    return response.data;
  }

  async function update(id: string, data: Partial<IUpdateTodoInput>) {
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
