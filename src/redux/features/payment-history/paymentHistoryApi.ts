import { baseApi } from "@/redux/api/baseApi";

const paymentHistoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPaymentHistory: builder.query({
      query: () =>
        `/payment-history`,
    }),
  }),
});

export const {
    useGetAllPaymentHistoryQuery,
} = paymentHistoryApi;
