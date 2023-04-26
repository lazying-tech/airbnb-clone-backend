"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingController = void 0;
const ListingService_1 = require("../../services/ListingService/ListingService");
exports.ListingController = {
    create: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return res.status(200).json(yield ListingService_1.ListingService.create(req.body));
        }
        catch (err) {
            res.status(500).json("Something went wrong");
        }
    }),
    addFavorite: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const params = req.params;
        const { listingId } = params;
        try {
            return res
                .status(200)
                .json(yield ListingService_1.ListingService.addFavorite(listingId, req.body));
        }
        catch (err) {
            res.status(500).json("Error");
        }
    }),
    deleteFavorite: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const params = req.params;
        const { listingId } = params;
        try {
            return res
                .status(200)
                .json(yield ListingService_1.ListingService.deleteFavorite(listingId, req.body));
        }
        catch (err) {
            res.status(500).json("Something went wrong");
        }
    }),
};
//# sourceMappingURL=ListingController.js.map