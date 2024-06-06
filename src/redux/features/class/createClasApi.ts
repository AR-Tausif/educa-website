import { baseApi } from "@/redux/api/baseApi";


export type TCreateClass = {
  className: string;
  fees:{
    year:number;
    yearlyMonthFees: number;
    // yearlyAccFees: number;
    admissionFees: number;
    reAdmissionFees: number;
    books: number;
    stationeries: number;
    idCard: number;
    tie: number;
    examFees:number
    studyTour: number;
    picnicFees:number;
  }
}
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createClass: builder.mutation({
      query: (classInfo: TCreateClass ) => ({
        url: "/class/create-class",
        method: "POST",
        body: classInfo,
      }),
      invalidatesTags: ["classes"],
    }),
    editClass: builder.mutation({
      query: (payload: { classId: string; classInfo: object }) => ({
        url: `/class/${payload.classId}`,
        method: "PUT",
        body: payload.classInfo,
      }),
      invalidatesTags: ["classes"],
    }),
    deleteClassById: builder.mutation({
      query: (classId: string) => ({
        url: `/class/${classId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["classes"],
    }),
    getAllClass: builder.query({
      query: () => ({
        url: `/class`,
        method: "GET",
      }),
      providesTags: ["classes"],
    }),
  }),
});

export const {
  useCreateClassMutation,
  useEditClassMutation,
  useDeleteClassByIdMutation,
  useGetAllClassQuery,
  
} = authApi;
