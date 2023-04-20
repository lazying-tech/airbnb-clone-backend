import { Request, Response, NextFunction } from "express";
import { AuthService } from "../../services/AuthService/AuthService";

export const AuthController = {
  register: async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await AuthService.register(req.body));
  },
};
