import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("O email informado é inválido.")
    .nonempty("O email é obrigatório."),
  password: z.string().nonempty("A senha é obrigatória."),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
