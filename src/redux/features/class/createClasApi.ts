import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createClass: builder.mutation({
      query: (classInfo) => ({
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
