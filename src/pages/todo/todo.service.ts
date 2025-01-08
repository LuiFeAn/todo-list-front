import { todoApi } from "../../@shared/api";
import { IListOutput } from "../../@shared/interfaces/list-output.interfaces";
import { CreateTodoInputType } from "./components/card_area/components/create-todo-form/create-todo.schema";
import { EditTodoInputPartialType } from "./components/card_area/components/edit-todo-form/edit-todo.schema";
import { ITodo, PriorityEnum } from "./todo.service.interfaces";
interface IUpdateTodoInput extends EditTodoInputPartialType {
  done?: boolean;
}

export interface IListTodosInput {
  search?: string;
  priority?: PriorityEnum;
  done?: boolean;
}

export default function useTodoService() {
  async function list(params?: IListTodosInput) {
    const response = await todoApi.get<IListOutput<ITodo>>("/todos", {
      params,
    });
    return response.data;
  }

  async function create(data: CreateTodoInputType) {
    await todoApi.post("/todos", data);
  }

  async function detail(id: string) {
    const response = await todoApi.get<ITodo>(`/todos/${id}`);
    return response.data;
  }

  async function update(id: string, data: IUpdateTodoInput) {
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
