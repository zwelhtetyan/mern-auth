import { RequestHandler } from "express";

// @desc Auth/user/set token
// route POST /api/users/auth
// @access Public

const authUser: RequestHandler = (req, res) => {
  return res.status(200).json({ message: "auth user" });
};

export { authUser };
