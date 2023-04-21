import express from "express";
import { ListingController } from "../../controllers/ListingController/ListingController";

const listingRoute = express.Router();

listingRoute.post("/", ListingController.create);
listingRoute.get("/", ListingController.getListings);
export default listingRoute;
