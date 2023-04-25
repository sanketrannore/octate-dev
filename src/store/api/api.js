import { api } from "../baseApi";

export const generalApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRequest: builder.query({
      query: (query) => ({
        url: "api/get",
        params: getQuery,
      }),
    }),
    postRequest: builder.mutation({
      query: (body) => ({
        url: `api/post`,
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useGetRequestQuery, usePostRequestMutation } = generalApi;
