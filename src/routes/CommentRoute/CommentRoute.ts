import express from "express";
import { CommentController } from "../../controllers/CommentController/CommentController";

const commentRoute = express.Router();

commentRoute.post("/", CommentController.create);

export default commentRoute;
