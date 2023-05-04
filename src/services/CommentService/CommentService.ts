import { PrismaClient } from "@prisma/client";
import { CreatCommentDto } from "../../dto/CommentDto/create-comment";

const prisma = new PrismaClient();
export const CommentService = {
  create: async (createComment: CreatCommentDto) => {
    try {
      const { comment, listingId, user, parentId } = createComment;

      if (!user) {
        throw new Error("Login First");
      }

      if (!listingId || !comment || comment == "") {
        throw new Error("Data not enough");
      }

      const Comment = await prisma.comment.create({
        data: {
          message: comment,
          listingId: listingId,
          userId: user.id,
          parentId: parentId,
        },
      });

      return Comment;
    } catch (err) {
      throw err;
    }
  },
};
