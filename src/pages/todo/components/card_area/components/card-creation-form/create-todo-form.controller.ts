import { toast } from "react-toastify";
import useTodoService from "../../../../todo.service";
import {
  CreateTodoInputType,
  EditTodoInputPartialType,
} from "./create-todo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  refetch(): Promise<void>;
  schema: CreateTodoInputType | EditTodoInputPartialType;
}

export default function useCreateTodoFormController({
  refetch,
  schema,
}: Props) {
  const { create } = useTodoService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTodoInputType>({
    resolver: zodResolver(schema as unknown as never),
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
