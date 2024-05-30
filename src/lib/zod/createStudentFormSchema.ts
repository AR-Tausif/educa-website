import { z } from "zod";

export const CreateStudentFormSchema = z.object({
  studentName: z.string({
    required_error: "Please select student name to display.",
  }),
  dateOfBirth: z.string({
    required_error: "Please select date of birth to display.",
  }),
  gender: z.string(),
  class: z.string({
    required_error: "Please select class.",
  }),
  religion: z.string().optional(),
  placeOfBirth: z.string().optional(),
  nationality: z.string().optional(),
  firstLanguage: z.string().optional(),
  presentAddress: z.string().optional(),
  permanentAddress: z.string().optional(),

  fatherName: z.string({
    required_error: "Please enter father's name to display.",
  }),
  fatherEmail: z.string().optional(),
  fatherPhonNumber: z.string().optional(),
  fatherIDCardNumber: z.string().optional(),
  fatherProfession: z.string().optional(),
  fatherPesignation: z.string().optional(),

  motherName: z.string({
    required_error: "Please enter mother's name",
  }),
  motherEmail: z.string().optional(),
  motherPhonNumber: z.string().optional(),
  motherIDCardNumber: z.string().optional(),
  motherProfession: z.string().optional(),
  motherPesignation: z.string().optional(),
});
