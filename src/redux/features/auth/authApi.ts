import { baseApi } from "@/redux/api/baseApi";

export type TPassInfo = {
  currentPassword: string;
  newPassword: string;
}
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo
      })
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo
      })
    }),
    changePassword: builder.mutation({
      query: (passInfo:TPassInfo) => ({
        url: "/auth/change-password",
        method: "POST",
        body: passInfo
      })
    })
  }),
})

export const { useLoginMutation, useRegisterMutation, useChangePasswordMutation } = authApi