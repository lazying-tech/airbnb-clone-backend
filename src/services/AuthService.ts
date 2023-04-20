import { CreateUserDto } from "../dto/create-user";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export const AuthService = {
  register: async (createUser: CreateUserDto) => {
    try {
      const { email, name, password } = createUser;
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await prisma.user.create({
        data: { email, name, hashedPassword },
      });

      return user;
    } catch (err) {
      return "ERROR";
    }
  },
};
