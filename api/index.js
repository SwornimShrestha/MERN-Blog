import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {
  console.log("Server is running on port:", port);
});

app.get("/test", (req, res) => {
  res.json({ message: "Api is working" });
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
