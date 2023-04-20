import { CreatListingDto } from "../../dto/ListingDto/create-listing";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const ListingService = {
  create: async (createListing: CreatListingDto) => {
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
        return "Login first !!!!";
      }

      const listing = await prisma.listing.create({
        data: {
          title,
          description,
          bathroomCount,
          roomCount,
          guestCount,
          locationValue: location.value,
          price: price,
          category,
          imageSrc,
          userId: user.id,
        },
      });

      return listing;
    } catch (err) {
      return err;
    }
  },
};
