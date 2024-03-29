// @ts-nocheck
import { CreatListingDto } from "../../dto/ListingDto/create-listing";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const ListingService = {
  create: async (createListing: CreateListingDto) => {
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
        throw new Error("Login First");
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
  addFavorite: async (listingId: string, data: any) => {
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
      const user = await prisma.user.update({
        where: { id: currentUser.id },
        data: { favoriteIds },
      });

      return user;
    } catch (err) {
      throw err;
    }
  },
  deleteFavorite: async (listingId: string, data: any) => {
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

      const user = await prisma.user.update({
        where: { id: currentUser.id },
        data: { favoriteIds },
      });

      return user;
    } catch (err) {
      throw err;
    }
  },
  delete: async (listingId: string, data: any) => {
    try {
      const currentUser = data.user;
      if (!currentUser) {
        throw new Error("Login First");
      }
      if (!listingId || typeof listingId !== "string") {
        throw new Error("Invalid ID");
      }

      const listing = await prisma.listing.deleteMany({
        where: { id: listingId, userId: currentUser.id },
      });

      return listing;
    } catch (err) {
      throw err;
    }
  },
};
