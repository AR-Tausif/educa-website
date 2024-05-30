import { z } from "zod";

export const SignUpUserFormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  fullName: z.string({
    required_error: "Please select an email to display.",
  }),
  phoneNumber: z.string({
    required_error: "Please select an email to display.",
  }),

  password: z.string({
    required_error: "Please select an email to display.",
  }),
});
