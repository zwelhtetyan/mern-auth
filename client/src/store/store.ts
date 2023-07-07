import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import { userEndpoint } from "./api/user.api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userEndpoint.reducerPath]: userEndpoint.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userEndpoint.middleware),

  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
