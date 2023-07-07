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

const getUserProfile: RequestHandler = (req: any, res) => {
  return res.status(200).json(req.user);
};

const updateUserProfile: RequestHandler = async (req: any, res) => {
  const { name, email, oldPassword, newPassword } = req.body;

  if (!name.trim() || !email.trim()) {
    return res.status(401).json({ message: "Invalid data" });
  }

  const user = await User.findById(req.user._id);

  if (user) {
    user.name = name;
    user.email = email;

    if (oldPassword?.trim() && newPassword.trim()) {
      const correctOldPassword = await bcrypt.compare(
        oldPassword,
        user.password
      );

      if (correctOldPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;

        const updatedUser = await user.save();

        return res.status(200).json({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
        });
      } else {
        return res.status(401).json({ message: "Incorrect Old password" });
      }
    } else {
      const updatedUser = await user.save();

      return res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      });
    }
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

const logoutUser: RequestHandler = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  return res.status(200).json({ message: "user logged out" });
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
