import { PrismaClient } from "@prisma/client";
import { CreatCommentDto } from "../../dto/CommentDto/create-comment";
import { UpdateCommentDto } from "../../dto/CommentDto/update-comment";

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
  update: async (commentId: string, updateComment: UpdateCommentDto) => {
    try {
      const { comment, listingId, user, parentId } = updateComment;

      if (comment == "" || comment == null) {
        throw new Error("Data not enough");
      }

      const userId = await prisma.comment.findUnique({
        where: { id: commentId },
        select: { userId: true },
      });

      if (userId?.userId !== user.id) {
        throw new Error("You do not have permission to edit this message");
      }

      const newComment = await prisma.comment.update({
        where: {
          id: commentId,
        },
        data: {
          message: comment,
        },
        select: { message: true },
      });
      return newComment;
    } catch (err) {
      throw err;
    }
  },
};
