import { z } from "zod";

export const StudentPaymentFormSchema = z.object({
    monthly: z.string(),
    admission: z.string(),
    readmission: z.string(),
    picnic: z.string(),
    exam: z.string(),
    studyTour: z.string(),
    books: z.string(),
    idCard: z.string(),
    stationeries: z.string(),
    tie: z.string(),
    discountOnFees:z.string(),
    cashCollection: z.string(),
  })
export const StudentPaymentFormManageSchema = z.object({
    discountOnFees:z.string(),
    cashCollection: z.string(),
  })