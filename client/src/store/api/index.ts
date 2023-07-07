import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ROOT_API = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["user"],
  endpoints: () => ({}),
});
