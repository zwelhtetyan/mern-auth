import { Response } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const generateToken = (
  res: Response,
  userId: mongoose.Types.ObjectId
) => {
  const token = jwt.sign({ userId }, String(process.env.JWT_SECRET), {
    expiresIn: "30d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  });
};
