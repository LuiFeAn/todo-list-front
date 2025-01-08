import { toast } from "react-toastify";
import useTodoService from "../../../../todo.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CreateTodoInputType,
  editodoInputPartialSchema,
} from "../create-todo-form/create-todo.schema";

interface Props {
  refetch(): Promise<void>;
}

export default function useEditTodoFormController({ refetch }: Props) {
  const { update } = useTodoService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTodoInputType>({
    resolver: zodResolver(editodoInputPartialSchema),
  });

  async function onSubmit(id: string, data: CreateTodoInputType) {
    try {
      await update(id, data);
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
