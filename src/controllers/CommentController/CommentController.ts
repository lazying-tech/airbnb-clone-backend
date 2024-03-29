import { Request, Response, NextFunction } from "express";
import { CommentService } from "../../services/CommentService/CommentService";
import jwt_decode from "jwt-decode";

export const CommentController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json(await CommentService.create(req.body));
    } catch (err: any) {
      return res.status(500).json(err.message);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    const params = req.params;
    const { commentId } = params;
    try {
      return res
        .status(200)
        .json(await CommentService.update(commentId, req.body));
    } catch (err: any) {
      return res.status(500).json(err.message);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    const params = req.params;
    const { commentId } = params;
    try {
      return res
        .status(200)
        .json(await CommentService.delete(commentId, req.body));
    } catch (err: any) {
      return res.status(500).json(err.message);
    }
  },
  toggleCommentLike: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const params = req.params;
    const { commentId } = params;
    try {
      return res
        .status(200)
        .json(await CommentService.toggleCommentLike(commentId, req.body));
    } catch (err: any) {
      return res.status(500).json(err.message);
    }
  },
};
