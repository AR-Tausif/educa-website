import { baseApi } from "@/redux/api/baseApi";
import { TUpdateStudentPayment } from "@/types/payment.type";

type TGetDueStudentPaymentByClassAndStudentId = {
  studentId: string;
  classId: string;
};
const createStudentPaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateStudentPaymentByClassIdAndStudentId: builder.mutation({
      query: (studentInfo: TUpdateStudentPayment) => ({
        url: `/student-payment/update-student-payment`,
        method: "PATCH",
        body: studentInfo,
      }),
      invalidatesTags: ["upstdp"],
    }),
    getDueStudentPaymentByClassAndStudentId: builder.query({
      query: (payload: TGetDueStudentPaymentByClassAndStudentId) =>
        `/student-payment/due/${payload.classId}/${payload.studentId}`,  providesTags: ["upstdp"],
    }),
    getStudentPaymentHistoryByClassAndStudentId: builder.query({
      query: (payload: TGetDueStudentPaymentByClassAndStudentId) =>
        `/student-payment/single-history/${payload.classId}/${payload.studentId}`, providesTags: ["upstdp"],
    }),
  }),
});

export const {
  useUpdateStudentPaymentByClassIdAndStudentIdMutation,
  useGetDueStudentPaymentByClassAndStudentIdQuery,
  useGetStudentPaymentHistoryByClassAndStudentIdQuery,
} = createStudentPaymentApi;
