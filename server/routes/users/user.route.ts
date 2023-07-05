import { Router } from "express";
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "./user.controller";
import { checkAuth } from "../../middleware/auth.middleware";

const userRouter = Router();

userRouter.post("/", registerUser);
userRouter.post("/auth", authUser);
userRouter.post("/logout", logoutUser);
userRouter
  .route("/profile")
  .get(checkAuth, getUserProfile)
  .put(checkAuth, updateUserProfile);

export default userRouter;
