import { ROOT_API } from ".";
const USER_URL = "/api/users";

interface LoginState {
  email: string;
  password: string;
}

interface UpdateProfileState {
  name: string;
  email: string;
  oldPassword: string;
  newPassword: string;
}

export const userEndpoint = ROOT_API.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data: LoginState & { name: string }) => ({
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
      query: (data: UpdateProfileState) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
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
