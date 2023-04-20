import express from "express";
import AuthRoute from "./AuthRoute/AuthRoute";
import listingRoute from "./ListingRoute/ListingRoute";
const router = express.Router();

router.use("/auth", AuthRoute);
router.use("/listing", listingRoute);
export default router;
