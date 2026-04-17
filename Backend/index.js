import express from "express";
import dotenv from "dotenv";
import db from "./config/database_connection.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json()); //it is use for the  the  json
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);
const port = process.env.PORT;
try {
  db.connect();

  // console.log("connected to database");
} catch (error) {
  console.log("database connection failed" + error);
}
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
