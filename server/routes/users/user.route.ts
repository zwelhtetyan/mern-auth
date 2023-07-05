import { Router } from "express";
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "./user.controller";

const userRouter = Router();

userRouter.post("/", registerUser);
userRouter.post("/auth", authUser);
userRouter.post("/logout", logoutUser);
userRouter.route("/profile").get(getUserProfile).put(updateUserProfile);

export default userRouter;
