"use server"

import { cookies } from "next/headers";

export const setCookieOfToken = (value:string)=>{
    const data = value;
    cookies().set("cookieName", data);
  }