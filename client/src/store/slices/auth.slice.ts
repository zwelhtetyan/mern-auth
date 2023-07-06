import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  id: string;
  name: string;
  email: string;
}

const initialState: { userInfo: UserInfo | null } = {
  userInfo: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    removeUser: (state) => {
      state.userInfo = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
