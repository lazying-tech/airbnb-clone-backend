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
const corsoption = function (req: Request, res: Response, next: NextFunction) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "YOUR_URL"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Custom-Header"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return next();
};
app.use(corsoption);
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
