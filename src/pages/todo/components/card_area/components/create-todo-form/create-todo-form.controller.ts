import { toast } from "react-toastify";
import useTodoService from "../../../../todo.service";
import {
  createTodoInputSchema,
  CreateTodoInputType,
} from "./create-todo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  refetch(): Promise<void>;
}

export default function useCreateTodoFormController({ refetch }: Props) {
  const { create } = useTodoService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTodoInputType>({
    resolver: zodResolver(createTodoInputSchema),
  });

  async function onSubmit(data: CreateTodoInputType) {
    try {
      await create(data);
      reset();
      await refetch();
      toast.success("Tarefa criada");
    } catch {
      toast.error("Não foi possível criar a tarefa");
    }
  }

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
  };
}
