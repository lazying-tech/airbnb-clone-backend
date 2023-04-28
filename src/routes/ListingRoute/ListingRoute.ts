import express from "express";
import { ListingController } from "../../controllers/ListingController/ListingController";

const listingRoute = express.Router();

listingRoute.post("/", ListingController.create);
listingRoute.post("/:listingId", ListingController.addFavorite);
listingRoute.patch("/:listingId", ListingController.deleteFavorite);
listingRoute.patch("/:listingId", ListingController.delete);
export default listingRoute;
