import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .max(250, "O nome deve possuir no máximo 250 caracteres")
    .nonempty("Nome é obrigatório"),
  email: z
    .string()
    .email("O email informado é inválido.")
    .nonempty("O email é obrigatório."),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres.")
    .nonempty("A senha é obrigatória.")
    .refine((value) => /[A-Z]/.test(value), {
      message: "A senha deve conter pelo menos uma letra maiúscula.",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "A senha deve conter pelo menos um número.",
    })
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "A senha deve conter pelo menos um símbolo.",
    }),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
