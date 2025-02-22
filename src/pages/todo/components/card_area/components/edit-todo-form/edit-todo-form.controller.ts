import { toast } from "react-toastify";
import useTodoService from "../../../../todo.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ITodo } from "../../../../todo.service.interfaces";
import {
  ediTodoInputPartialSchema,
  EditTodoInputPartialType,
} from "./edit-todo.schema";
import { useEffect, useState } from "react";

interface Props {
  todo: ITodo;
  refetch(): Promise<void>;
  onCancel(): void;
}

export default function useEditTodoFormController({
  refetch,
  todo,
  onCancel,
}: Props) {
  const { update, detail } = useTodoService();

  const [todoDeitals, setTodoDetails] = useState<ITodo>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditTodoInputPartialType>({
    resolver: zodResolver(ediTodoInputPartialSchema),
  });

  async function onSubmit(data: EditTodoInputPartialType) {
    try {
      await update(todo.id, {
        title: data.title || undefined,
        description: data.description || undefined,
        priority: data.priority || undefined,
      });
      onCancel();
      reset();
      await refetch();
      toast.success("Tarefa atualizada");
    } catch {
      toast.error("Não foi possível atualizar a tarefa");
    }
  }

  async function detailTodo() {
    try {
      const response = await detail(todo.id);
      setTodoDetails(response);
    } catch {
      toast.error("Não foi possível detalhar a tarefa");
    }
  }

  useEffect(() => {
    detailTodo();
  }, [todo]);

  return {
    register,
    errors,
    todoDeitals,
    handleSubmit,
    onSubmit,
  };
}
