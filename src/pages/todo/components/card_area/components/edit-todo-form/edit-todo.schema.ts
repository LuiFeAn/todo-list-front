import { z } from "zod";

export const ediTodoInputPartialSchema = z.object({
  title: z
    .string()
    .max(100, "O título deve ter no máximo 100 caracteres.")
    .optional(),
  description: z
    .string()
    .max(500, "A descrição deve ter no máximo 300 caracteres.")
    .optional(),
  priority: z.string().optional(),
});

export type EditTodoInputPartialType = z.infer<
  typeof ediTodoInputPartialSchema
>;
