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
exports.ReservationService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.ReservationService = {
    create: (createReservation) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { totalPrice, startDate, endDate, listingId, user } = createReservation;
            if (!user) {
                throw new Error("Login First");
            }
            if (!listingId || !startDate || !endDate || !totalPrice) {
                throw new Error("Data not enough");
            }
            // update reservation in listing and create reservation simultaneously
            const listingAndReservation = yield prisma.listing.update({
                where: {
                    id: listingId,
                },
                data: {
                    reservations: {
                        create: {
                            userId: user.id,
                            startDate: startDate,
                            endDate: endDate,
                            totalPrice: totalPrice,
                            // dont need to declare listingId here because prisma will auto take the reference in where property (we already told primsa about their reference in model)
                        },
                    },
                },
            });
            return listingAndReservation;
        }
        catch (err) {
            throw err;
        }
    }),
    delete: (reservationId, data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const currentUser = data.user;
            if (!currentUser) {
                throw new Error("Login First");
            }
            if (!reservationId || typeof reservationId !== "string") {
                throw new Error("Invalid ID");
            }
            console.log(currentUser, reservationId);
            const reservation = yield prisma.reservation.deleteMany({
                where: {
                    id: reservationId,
                    OR: [
                        // ensure who can delete reservation is the user created reservation OR the user created listing
                        { userId: currentUser.id },
                        { listing: { userId: currentUser.id } },
                    ],
                },
            });
            return reservation;
        }
        catch (err) {
            throw err;
        }
    }),
};
//# sourceMappingURL=ReservationService.js.map