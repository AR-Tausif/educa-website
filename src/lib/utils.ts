import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const APP_ROUTES = {
  REGISTER: "/register",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  CREATE_CLASS: "/dashboard/create-class",
  ALL_CLASS: "/dashboard/all-class",
  CREATE_STUDENT: "/dashboard/add-student",
  ALL_STUDENT: "/dashboard/students",
  ALL_USER:"/dashboard/users",
}