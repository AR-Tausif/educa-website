

import { baseApi } from "@/redux/api/baseApi"

const reportsPaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStudentReportPayment: builder.query({
      query: () => ("/report/yearly-payment-report"),
      providesTags:["students", "upstdp"]
    }),
  }),
})

export const {  useGetStudentReportPaymentQuery} = reportsPaymentApi;