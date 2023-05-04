import { Request, Response, NextFunction } from "express";
import { CommentService } from "../../services/CommentService/CommentService";

export const CommentController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json(await CommentService.create(req.body));
    } catch (err) {
      res.status(500).json("Something went wrong");
    }
  },
};
