import { z } from "zod";

export type LoginFormData =
    z.infer<typeof loginSchema>;


export const loginSchema = z.object({

    email: z.string().email("E-mail inválido"),
    senha: z.string().min(6, "A senha deve possuir pelo menos 6 caracteres")

});