import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ProductRoutes from "./routes/Product.route.js";
import cors from "cors";

const app = express();

//Config
dotenv.config();
app.use(express.json());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
connect();

//routes
app.use("/products", ProductRoutes);

//Error handler
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong.";
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});
app.listen(process.env.PORT || 5000, console.log("Server On"));
