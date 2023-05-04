import express from "express";
import AuthRoute from "./AuthRoute/AuthRoute";
import listingRoute from "./ListingRoute/ListingRoute";
import reservationRoute from "./ReservationRoute/ReservationRoute";
import commentRoute from "./CommentRoute/CommentRoute";
const router = express.Router();

router.use("/auth", AuthRoute);
router.use("/listing", listingRoute);
router.use("/favorites", listingRoute);
router.use("/reservations", reservationRoute);
router.use("/comments", commentRoute);
export default router;
