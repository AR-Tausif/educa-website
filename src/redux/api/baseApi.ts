import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints

//export const baseURL = "http://localhost:5000/api/v1";
 export const baseURL = "https://educa-international-school-server.vercel.app/api/v1";
export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["classes", "students", "singleStudent", "users"],
  baseQuery: fetchBaseQuery({ baseUrl: baseURL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
  
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `${token}`);
      }
  
      return headers;
    },
    credentials: "include" }),
  endpoints: () => ({}), // Endpoints are builded separate folder of each features "AuthAPI.ts" file
  
});
