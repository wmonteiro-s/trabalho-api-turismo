import { z } from "zod"

export const tourismrequests = z.object({
    name: z.string().min(3, "é requerido pelo menos 3 letras" ), 
    email: z.string().email("email não coresponde á um email padrão"),
    phone: z.string().min(10, "telefone inválido").max(15, "telefone inválido").regex(/^\d+$/, "telefone deve conter apenas números"),
    password: z.string()
        .min(6, "A senha deve ter pelo menos 6 chars").regex(/[A-Z]/,"A senha deve ter pelo menos uma letra maíscula")
})

export const adminrequests = z.object({
    name: z.string().min(3, "é requerido pelo menos 3 letras" ), 
    email: z.string().email("email não coresponde á um email padrão"),
    password: z.string()
        .min(6, "A senha deve ter pelo menos 6 chars").regex(/[A-Z]/,"A senha deve ter pelo menos uma letra maíscula")
})


export const loginschema = z.object({
    email: z.string().email("email invalido. "),
    password: z.string().min(1, "senha obrigatoria")
})