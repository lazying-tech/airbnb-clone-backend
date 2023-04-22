import { Request, Response, NextFunction } from "express";
import { ListingService } from "../../services/ListingService/ListingService";

export const ListingController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json(await ListingService.create(req.body));
    } catch (err) {
      res.status(500).json("Something went wrong");
    }
  },
  addFavorite: async (req: Request, res: Response, next: NextFunction) => {
    const params = req.params;
    const { listingId } = params;

    try {
      return res
        .status(200)
        .json(await ListingService.addFavorite(listingId, req.body));
    } catch (err) {
      res.status(500).json("Error");
    }
  },
  deleteFavorite: async (req: Request, res: Response, next: NextFunction) => {
    const params = req.params;
    const { listingId } = params;

    try {
      return res
        .status(200)
        .json(await ListingService.deleteFavorite(listingId, req.body));
    } catch (err) {
      res.status(500).json("Something went wrong");
    }
  },
};
