import { z } from "zod";

export const UpdateStudentFormSchema = z.object({
  studentName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.string().optional(),
  class: z.string().optional(),
  religion: z.string().optional(),
  placeOfBirth: z.string().optional(),
  nationality: z.string().optional(),
  firstLanguage: z.string().optional(),
  presentAddress: z.string().optional(),
  permanentAddress: z.string().optional(),

  fatherName: z.string().optional(),
  fatherEmail: z.string().optional(),
  fatherPhonNumber: z.string().optional(),
  fatherIDCardNumber: z.string().optional(),
  fatherProfession: z.string().optional(),
  fatherPesignation: z.string().optional(),

  motherName: z.string().optional(),
  motherEmail: z.string().optional(),
  motherPhonNumber: z.string().optional(),
  motherIDCardNumber: z.string().optional(),
  motherProfession: z.string().optional(),
  motherPesignation: z.string().optional(),
});
