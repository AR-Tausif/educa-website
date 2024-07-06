import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
  credentials: "include",
});

// const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
//   const result = await baseQuery(args, api, extraOptions);

//   if (result.error?.status == 401) {
//     const res = await fetch(`${baseURL}/auth/refresh-token`, {
//       method: "POST",
//       credentials: "include",
//     });
//     const data = await res.json();
//     console.log(data)
//   }
//   return result;
// };
export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["classes", "students", "singleStudent", "users", "upstdp"],
  baseQuery,
  endpoints: () => ({}), // Endpoints are builded separate folder of each features "AuthAPI.ts" file
});
