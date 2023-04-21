import { CreatListingDto } from "../../dto/ListingDto/create-listing";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const ListingService = {
  create: async (createListing: any) => {
    try {
      const {
        category,
        description,
        bathroomCount,
        roomCount,
        guestCount,
        user,
        location,
        imageSrc,
        price,
        title,
      } = createListing;

      if (!user) {
        return Error("Login First");
      }

      const listing = await prisma.listing.create({
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
    } catch (err: any) {
      throw err;
    }
  },
};
