import { Request, Response, NextFunction } from "express";
import { ListingService } from "../../services/ListingService/ListingService";

export const ListingController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const listing = await ListingService.create(req.body);
      return res.status(200).json(listing);
    } catch (err) {
      return res.status(500).json("Something went wrong");
    }
  },
};
