

import { baseApi } from "@/redux/api/baseApi"

const reportsPaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStudentReportPayment: builder.query({
      query: () => ("/report/yearly-payment-report"),
      providesTags: ["students", "upstdp"]
    }),
    getFilterStudentGender: builder.query({
      query: () => ("/report/filter-student-gender"),
      providesTags: ["students", "upstdp"]
    }),
  }),
})

export const { useGetStudentReportPaymentQuery, useGetFilterStudentGenderQuery } = reportsPaymentApi;