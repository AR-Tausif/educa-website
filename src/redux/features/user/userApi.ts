import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    getAllUser: builder.query({
      query: () => ({
        url: `/user/all-user`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    deleteUserById: builder.mutation({
      query: (userId) => ({
        url: `/user/deleting-user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
    blockingUserById: builder.mutation({
      query: (userId) => ({
        url: `/user/blocking-user/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    makeAdminUserById: builder.mutation({
      query: (userId) => ({
        url: `/user/make-admin/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    removeAdminUserById: builder.mutation({
      query: (userId) => ({
        url: `/user/remove-admin/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"]
    }),
    getCountingDocs: builder.query({
      query: () => ({
        url: `/user/counting-document`,
        method: "GET",
      }),
      providesTags: ["users", "classes", "students", "singleStudent", "upstdp"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useDeleteUserByIdMutation,
  useBlockingUserByIdMutation,
  useMakeAdminUserByIdMutation,
  useRemoveAdminUserByIdMutation,
  useGetCountingDocsQuery,
} = authApi;
