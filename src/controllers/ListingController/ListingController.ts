import { Request, Response, NextFunction } from "express";
import { ListingService } from "../../services/ListingService/ListingService";

export const ListingController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(await ListingService.create(req.body));
  },
};
