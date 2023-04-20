import express, { NextFunction, Request, Response } from "express";
import MainRoute from "./routes/index";
import cors from "cors";
require("dotenv").config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT: any = process.env.PORT || 8000;
app.use("/api/v1", MainRoute);

app.use("/", (req: Request, res: Response) => {
  return res.status(200).json("AKFJL");
});
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
