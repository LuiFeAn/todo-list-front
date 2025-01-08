import { toast } from "react-toastify";
import useTodoService from "../../../../todo.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CreateTodoInputType,
  editodoInputPartialSchema,
} from "../create-todo-form/create-todo.schema";
import { ITodo } from "../../../../todo.service.interfaces";

interface Props {
  todo: ITodo;
  refetch(): Promise<void>;
}

export default function useEditTodoFormController({ refetch, todo }: Props) {
  const { update } = useTodoService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTodoInputType>({
    resolver: zodResolver(editodoInputPartialSchema),
  });

  async function onSubmit(data: CreateTodoInputType) {
    try {
      await update(todo.id, data);
      reset();
      await refetch();
      toast.success("Tarefa atualizada");
    } catch {
      toast.error("Não foi possível atualizar a tarefa");
    }
  }

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
  };
}
