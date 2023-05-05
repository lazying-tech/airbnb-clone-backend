import express from "express";
import { CommentController } from "../../controllers/CommentController/CommentController";

const commentRoute = express.Router();

commentRoute.post("/", CommentController.create);
commentRoute.patch("/:commentId", CommentController.update);
export default commentRoute;
