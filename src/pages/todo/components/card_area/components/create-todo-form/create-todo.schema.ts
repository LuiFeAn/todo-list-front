import { z } from "zod";
import { PriorityEnum } from "../../../../todo.service.interfaces";

export const createTodoInputSchema = z.object({
  title: z
    .string()
    .nonempty("O título é obrigatório.")
    .max(20, "O título deve ter no máximo 20 caracteres."),
  description: z
    .string()
    .nonempty("A descrição é obrigatória.")
    .max(250, "A descrição deve ter no máximo 250 caracteres."),
  priority: z.nativeEnum(PriorityEnum),
});

export type CreateTodoInputType = z.infer<typeof createTodoInputSchema>;
