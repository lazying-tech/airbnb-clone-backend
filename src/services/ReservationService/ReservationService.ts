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
};
