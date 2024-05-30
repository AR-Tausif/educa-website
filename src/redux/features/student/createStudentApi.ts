import { baseApi } from "@/redux/api/baseApi"

const createStudentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (studentInfo) => ({
        url: "/student/create-student",
        method: "POST",
        body: studentInfo
      }),
      invalidatesTags: ["students"]
    }),
    updateStudentData: builder.mutation({
      query: (studentInfo) => ({
        url: `/student/${studentInfo.studentId}`,
        method: "PUT",
        body: studentInfo.updatedData
      }),
      invalidatesTags: ["singleStudent"]
    }),
    deleteStudentById: builder.mutation({
      query: (studentId) => ({
        url: `student/${studentId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["students"]
    }),
    getAllStudent: builder.query({
      query: () => ("/student"),
      providesTags:["students"]
    }),
    getStudentByClassId: builder.query({
      query: (classId) => (`/student/class/${classId}`)
    }),
    getStudentByStudentId: builder.query({
      query: (classId) => (`/student/${classId}`),
      providesTags: ["singleStudent"]
    }),
  }),
})

export const { useCreateStudentMutation,useUpdateStudentDataMutation, useDeleteStudentByIdMutation, useGetAllStudentQuery, useGetStudentByClassIdQuery, useGetStudentByStudentIdQuery } = createStudentApi;