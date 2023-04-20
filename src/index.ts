import express, { Request, Response } from "express";
import MainRoute from "./routes/index";

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT: any = process.env.PORT || 8000;
app.use("/", () => {
  console.log("Hello");
});
app.use("/api/v1", MainRoute);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
