import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUser: builder.query({
      query: () => "/users/me/",
    }),
    socialAuthentication: builder.mutation({
      query: ({ provider, state, code }) => ({
        url: `/o/${provider}/?state=${encodeURIComponent(
          state
        )}&code=${encodeURIComponent(code)}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/jwt/create/",
        method: "POST",
        body: { email, password },
      }),
    }),
    register: builder.mutation({
      query: ({ first_name, last_name, email, password, re_password }) => ({
        url: "/users/",
        method: "POST",
        body: { first_name, last_name, email, password, re_password },
      }),
    }),
    verify: builder.mutation({
      query: () => ({
        url: "/jwt/verify/",
        method: "POST",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout/",
        method: "POST",
      }),
    }),
    activation: builder.mutation({
      query: ({ uid, token }) => ({
        url: "/users/activation/",
        method: "POST",
        body: { uid, token },
      }),
    }),
    resetPassword: builder.mutation({
      query: (email) => ({
        url: "/users/reset_password/",
        method: "POST",
        body: { email },
      }),
    }),
    resetPasswordConfirm: builder.mutation({
      query: ({ uid, token, new_password, re_new_password }) => ({
        url: "/users/reset_password_confirm/",
        method: "POST",
        body: { uid, token, new_password, re_new_password },
      }),
    }),
    fetchItems: builder.query({
      query: () => "/items/",
    }),
    fetchAuthenticatedUser: builder.query({
      query: () => "/users/me/",
    }),
    fetchOwnListings: builder.query({
      query: () => "/listings/myitems/",
    }),
    updateItem: builder.mutation({
      query: ({ id, name, description, category, condition }) => ({
        url: `/items/${id}/`,
        method: "PATCH",
        body: { name, description, category, condition },
      }),
    }),
    createItem: builder.mutation({
      query: (newItem) => ({
        url: "/items/",
        method: "POST",
        body: newItem,
      }),
    }),
  }),
});

// use'NAME OF QUERY'Query
// use'NAME OF MUTATION'Mutation
export const {
  useRetrieveUserQuery,
  useSocialAuthenticationMutation,
  useLoginMutation,
  useVerifyMutation,
  useLogoutMutation,
  useActivationMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useRegisterMutation,
  useFetchItemsQuery,
  useFetchAuthenticatedUserQuery,
  useFetchOwnListingsQuery,
  useUpdateItemMutation,
  useCreateItemMutation,
} = authApiSlice;
