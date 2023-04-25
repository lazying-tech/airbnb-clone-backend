import express from "express";
import AuthRoute from "./AuthRoute/AuthRoute";
import listingRoute from "./ListingRoute/ListingRoute";
import reservationRoute from "./ReservationRoute/ReservationRoute";
const router = express.Router();

router.use("/auth", AuthRoute);
router.use("/listing", listingRoute);
router.use("/favorites", listingRoute);
router.use("/reservations", reservationRoute);
export default router;
