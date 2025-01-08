import { z } from "zod";
import { PriorityEnum } from "../../../../todo.service.interfaces";

export const createTodoInputSchema = z.object({
  title: z
    .string()
    .nonempty("O título é obrigatório.")
    .max(100, "O título deve ter no máximo 100 caracteres."),
  description: z
    .string()
    .nonempty("A descrição é obrigatória.")
    .max(800, "A descrição deve ter no máximo 800 caracteres."),
  priority: z.nativeEnum(PriorityEnum).optional(),
});

export const editodoInputPartialSchema = createTodoInputSchema.partial();

export type EditTodoInputPartialType = z.infer<
  typeof editodoInputPartialSchema
>;

export type CreateTodoInputType = z.infer<typeof createTodoInputSchema>;
