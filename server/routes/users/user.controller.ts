import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import { User } from "../../models/user.model";
import { generateToken } from "../../utils/generateToken";

const registerUser: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name?.trim() || !email?.trim() || !password?.trim()) {
    return res.status(400).json({ message: "Invalid data" });
  }

  const userExit = await User.findOne({ email });

  if (userExit) {
    return res.status(409).json({ message: "user already exist" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ name, email, password: hashedPassword });
  generateToken(res, newUser._id);

  const responseUser = {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
  };

  return res.status(200).json(responseUser);
};

const authUser: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email?.trim() || !password?.trim()) {
    return res.status(400).json({ message: "Invalid data" });
  }

  const userExit = await User.findOne({ email });

  if (!userExit) return res.status(401).json({ message: "User not found!" });

  const correctPassword = await bcrypt.compare(password, userExit.password);

  if (correctPassword) {
    generateToken(res, userExit.id);

    const responseUser = {
      _id: userExit._id,
      name: userExit.name,
      email: userExit.email,
    };

    return res.status(200).json(responseUser);
  } else {
    return res.status(401).json({ message: "something went wrong" });
  }
};

const logoutUser: RequestHandler = (req, res) => {
  return res.status(200).json({ message: "logout user" });
};

const getUserProfile: RequestHandler = (req, res) => {
  return res.status(200).json({ message: "user profile" });
};

const updateUserProfile: RequestHandler = (req, res) => {
  return res.status(200).json({ message: "update user profile" });
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
