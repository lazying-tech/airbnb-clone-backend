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
exports.ListingService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.ListingService = {
    create: (createListing) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { category, description, bathroomCount, roomCount, guestCount, user, location, imageSrc, price, title, } = createListing;
            if (!user) {
                return Error("Login First");
            }
            const listing = yield prisma.listing.create({
                data: {
                    title,
                    description,
                    imageSrc,
                    category,
                    bathroomCount,
                    roomCount,
                    guestCount,
                    locationValue: location.value,
                    price: parseInt(price, 10),
                    userId: user.id,
                },
            });
            return listing;
        }
        catch (err) {
            throw err;
        }
    }),
    getListings: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const listings = yield prisma.listing.findMany({
                orderBy: { createAt: "desc" },
            });
            return listings;
        }
        catch (err) {
            throw err;
        }
    }),
};
//# sourceMappingURL=ListingService.js.map