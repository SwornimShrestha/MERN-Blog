import User from "../models/user.model.js";
import { errorhandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorhandler(400, "All field are required"));
  }
  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    await newUser.save();
    res.json({ message: "Signup Successfully" });
  } catch (error) {
    next(error);
  }
};
