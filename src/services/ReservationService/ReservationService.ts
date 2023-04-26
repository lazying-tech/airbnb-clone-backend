import { PrismaClient } from "@prisma/client";

import { CreatReservationgDto } from "../../dto/ReservationDto/CreateReservationDto";

const prisma = new PrismaClient();
export const ReservationService = {
  create: async (createReservation: CreatReservationgDto) => {
    try {
      const { totalPrice, startDate, endDate, listingId, user } =
        createReservation;
      if (!user) {
        throw new Error("Login First");
      }

      if (!listingId || !startDate || !endDate || !totalPrice) {
        throw new Error("Data not enough");
      }

      // update reservation in listing and create reservation simultaneously
      const listingAndReservation = await prisma.listing.update({
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
    } catch (err) {
      throw err;
    }
  },
  delete: async (reservationId: string, data: any) => {
    try {
      const currentUser = data.user;
      if (!currentUser) {
        throw new Error("Login First");
      }
      if (!reservationId || typeof reservationId !== "string") {
        throw new Error("Invalid ID");
      }
      console.log(currentUser);
      const reservation = await prisma.reservation.deleteMany({
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
    } catch (err) {
      throw err;
    }
  },
};
