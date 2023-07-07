import { ROOT_API } from ".";
const USER_URL = "/api/users";

interface LoginState {
  email: string;
  password: string;
}

export const userEndpoint = ROOT_API.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: USER_URL,
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data: LoginState) => ({
        url: `${USER_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useUpdateProfileMutation,
  useLogoutMutation,
} = userEndpoint;
