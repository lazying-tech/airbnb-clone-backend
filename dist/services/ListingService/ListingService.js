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
                throw new Error("Login First");
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
    addFavorite: (listingId, data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const currentUser = data.user;
            if (!currentUser) {
                throw new Error("Login First");
            }
            if (!listingId || typeof listingId !== "string") {
                throw new Error("Invalid ID");
            }
            let favoriteIds = [...(currentUser.favoriteIds || [])];
            favoriteIds.push(listingId);
            console.log(favoriteIds);
            const user = yield prisma.user.update({
                where: { id: currentUser.id },
                data: { favoriteIds },
            });
            return user;
        }
        catch (err) {
            throw err;
        }
    }),
    deleteFavorite: (listingId, data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const currentUser = data.user;
            if (!currentUser) {
                throw new Error("Login First");
            }
            if (!listingId || typeof listingId !== "string") {
                throw new Error("Invalid ID");
            }
            let favoriteIds = [...(currentUser.favoriteIds || [])];
            favoriteIds = favoriteIds.filter((id) => id !== listingId);
            const user = yield prisma.user.update({
                where: { id: currentUser.id },
                data: { favoriteIds },
            });
            return user;
        }
        catch (err) {
            throw err;
        }
    }),
    delete: (listingId, data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const currentUser = data.user;
            if (!currentUser) {
                throw new Error("Login First");
            }
            if (!listingId || typeof listingId !== "string") {
                throw new Error("Invalid ID");
            }
            const listing = yield prisma.listing.deleteMany({
                where: { id: listingId, userId: currentUser.id },
            });
            return listing;
        }
        catch (err) {
            throw err;
        }
    }),
};
//# sourceMappingURL=ListingService.js.map