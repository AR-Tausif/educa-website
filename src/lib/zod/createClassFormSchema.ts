import { z } from "zod";

export const CreateStudentFormSchema = z.object({
  name: z
    .string({
      required_error: "Please input a class name to display.",
    }),
})