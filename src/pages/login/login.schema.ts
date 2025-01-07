import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("O email informado é inválido.")
    .nonempty("O email é obrigatório."),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres.")
    .nonempty("A senha é obrigatória."),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
