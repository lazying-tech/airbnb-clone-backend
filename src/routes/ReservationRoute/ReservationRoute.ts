import express from "express";

import { ReservationController } from "../../controllers/ReservationController/ReservationController";
const reservationRoute = express.Router();

reservationRoute.post("/", ReservationController.create);
reservationRoute.patch("/:reservationId", ReservationController.delete);
export default reservationRoute;
