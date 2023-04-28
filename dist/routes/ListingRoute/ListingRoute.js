"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ListingController_1 = require("../../controllers/ListingController/ListingController");
const listingRoute = express_1.default.Router();
listingRoute.post("/", ListingController_1.ListingController.create);
listingRoute.post("/:listingId", ListingController_1.ListingController.addFavorite);
listingRoute.patch("/:listingId", ListingController_1.ListingController.deleteFavorite);
listingRoute.patch("/:listingId", ListingController_1.ListingController.delete);
exports.default = listingRoute;
//# sourceMappingURL=ListingRoute.js.map