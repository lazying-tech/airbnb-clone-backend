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

      const User = await prisma.comment.findUnique({
        where: { id: commentId },
        select: { userId: true },
      });

      if (User?.userId !== user.id) {
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
  delete: async (commentId: string, data: any) => {
    try {
      const currentUser = data.user;

      const user = await prisma.comment.findUnique({
        where: { id: commentId },
        select: { userId: true },
      });

      if (user?.userId !== currentUser.id) {
        throw new Error("You do not have permission to delete this message");
      }

      const comment = await prisma.comment.findUnique({
        where: {
          id: commentId,
        },
      });

      const deleteCommentWitchChildren = async (comment: any) => {
        // find all the children have parent which is the comment we are deleting
        try {
          const children = await prisma.comment.findMany({
            where: {
              parent: {
                id: comment.id,
              },
            },
          });

          for (const child of children) {
            await deleteCommentWitchChildren(child);
          }

          const commentDelete = await prisma.comment.delete({
            where: {
              id: comment.id,
            },
          });
          return { ...commentDelete };
        } catch (err: any) {
          throw err;
        }
      };
      const deletedComment = await deleteCommentWitchChildren(comment);
      return deletedComment;
    } catch (err) {
      throw err;
    }
  },
};
