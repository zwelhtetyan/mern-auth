import { RequestHandler } from "express";

const authUser: RequestHandler = (_req, res) => {
  return res.status(200).json({ message: "auth user" });
};

const registerUser: RequestHandler = (_req, res) => {
  return res.status(200).json({ message: "register user" });
};

const logoutUser: RequestHandler = (_req, res) => {
  return res.status(200).json({ message: "logout user" });
};

const getUserProfile: RequestHandler = (_req, res) => {
  return res.status(200).json({ message: "user profile" });
};

const updateUserProfile: RequestHandler = (_req, res) => {
  return res.status(200).json({ message: "update user profile" });
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
