import { Router } from "express";
import { authUser } from "./user.controller";

const userRouter = Router();

userRouter.post("/auth", authUser);

export default userRouter;
