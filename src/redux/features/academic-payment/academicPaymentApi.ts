import { baseApi } from "@/redux/api/baseApi";

type TGetSingleAcademicPaymentByClassId = {
  classId: string;
};
const academicPaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicPayment: builder.query({
      query: () =>
        `/academic-payment`,
    }),
    getSingleAcademicPaymentByClassId: builder.query({
      query: (payload: TGetSingleAcademicPaymentByClassId) =>
        `/academic-payment/${payload.classId}`,
    }),
  }),
});

export const {
 useGetAllAcademicPaymentQuery,
 useGetSingleAcademicPaymentByClassIdQuery,
} = academicPaymentApi;
