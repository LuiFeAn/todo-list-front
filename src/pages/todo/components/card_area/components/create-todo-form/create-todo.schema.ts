import { z } from "zod";

export const createTodoInputSchema = z.object({
  title: z
    .string()
    .nonempty("O título é obrigatório.")
    .max(100, "O título deve ter no máximo 100 caracteres."),
  description: z
    .string()
    .nonempty("A descrição é obrigatória.")
    .max(800, "A descrição deve ter no máximo 800 caracteres."),
  priority: z.string().optional(),
});

export const ediTodoInputPartialSchema = z.object({
  title: z
    .string()
    .max(100, "O título deve ter no máximo 100 caracteres.")
    .optional(),
  description: z
    .string()
    .max(800, "A descrição deve ter no máximo 800 caracteres.")
    .optional(),
  priority: z.string().optional(),
});

export type EditTodoInputPartialType = z.infer<
  typeof ediTodoInputPartialSchema
>;

export type CreateTodoInputType = z.infer<typeof createTodoInputSchema>;
