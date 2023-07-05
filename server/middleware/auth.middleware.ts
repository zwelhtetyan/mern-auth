import { Request, Response } from "express";
import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

export const checkAuth = async (
  req: Request & { user?: any },
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Invalid token" });

  try {
    const isAuthorized: any = jwt.verify(token, String(process.env.JWT_SECRET));

    req.user = await User.findById(isAuthorized.userId).select("-password");

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid token" });
  }
};
