import { Request, Response, NextFunction } from "express";
import { ReservationService } from "../../services/ReservationService/ReservationService";

export const ReservationController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json(await ReservationService.create(req.body));
    } catch (err) {
      res.status(500).json("Something went wrong");
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    const params = req.params;
    const { reservationId } = params;
    try {
      return res
        .status(200)
        .json(await ReservationService.delete(reservationId, req.body));
    } catch (err) {
      res.status(500).json("Something went wrong");
    }
  },
};
