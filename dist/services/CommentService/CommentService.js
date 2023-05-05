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
exports.CommentService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.CommentService = {
    create: (createComment) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { comment, listingId, user, parentId } = createComment;
            if (!user) {
                throw new Error("Login First");
            }
            if (!listingId || !comment || comment == "") {
                throw new Error("Data not enough");
            }
            const Comment = yield prisma.comment.create({
                data: {
                    message: comment,
                    listingId: listingId,
                    userId: user.id,
                    parentId: parentId,
                },
            });
            return Comment;
        }
        catch (err) {
            throw err;
        }
    }),
    update: (commentId, updateComment) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { comment, listingId, user, parentId } = updateComment;
            if (comment == "" || comment == null) {
                throw new Error("Data not enough");
            }
            const userId = yield prisma.comment.findUnique({
                where: { id: commentId },
                select: { userId: true },
            });
            if ((userId === null || userId === void 0 ? void 0 : userId.userId) !== user.id) {
                throw new Error("You do not have permission to edit this message");
            }
            const newComment = yield prisma.comment.update({
                where: {
                    id: commentId,
                },
                data: {
                    message: comment,
                },
                select: { message: true },
            });
            return newComment;
        }
        catch (err) {
            throw err;
        }
    }),
};
//# sourceMappingURL=CommentService.js.map