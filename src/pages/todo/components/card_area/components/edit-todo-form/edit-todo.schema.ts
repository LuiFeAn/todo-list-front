import { z } from "zod";

export const ediTodoInputPartialSchema = z.object({
  title: z
    .string()
    .max(20, "O título deve ter no máximo 20 caracteres.")
    .optional(),
  description: z
    .string()
    .max(250, "A descrição deve ter no máximo 250 caracteres.")
    .optional(),
  priority: z.string().optional(),
});

export type EditTodoInputPartialType = z.infer<
  typeof ediTodoInputPartialSchema
>;
