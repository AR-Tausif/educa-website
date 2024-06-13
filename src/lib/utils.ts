import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const APP_ROUTES = {
  REGISTER: "sign-up",
  LOGIN: "login",
  DASHBOARD: "dashboard",
  CREATE_CLASS: "dashboard/create-class",
  ALL_CLASS: "dashboard/all-class",

  // student
  CLASS_STUDENT: "dashboard/class-student",       // :DYNAMIC ID
  CREATE_STUDENT: "dashboard/add-student",
  UPDATE_STUDENT: "dashboard/update-student",
  ALL_STUDENT: "dashboard/students",
  ALL_USER:"dashboard/users",
  STUDENT_DETAILS: "dashboard/student-details" ,
  // Payment
  PAYMENT: "dashboard/payment",       //  :DYNAMIC ID
  ALL_PAYMENT_HISTORY: "dashboard/all-payment-history",

  // PROFILE
  PROFILE: "dashboard/profile"
}