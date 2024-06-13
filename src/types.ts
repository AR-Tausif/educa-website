import { TUserRole } from "./types/user.type";

// Define a type for the roles
export type Role = 'admin' | 'superAdmin' | 'user';
export type TTokenPayload = {
  userId:string;
  role: TUserRole;
  exp:number;
}

// Define a type for the role-based routes
export type RoleBasedRoutes = {
  [key in Role]: string[];
};