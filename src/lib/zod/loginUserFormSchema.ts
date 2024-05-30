import { z } from "zod";

export const LoginUserFormSchema = z.object({
    email: z
        .string({
            required_error: "Please select an email to display.",
        }).email(),

    password: z
        .string({
            required_error: "Please select an email to display.",
        }),

})