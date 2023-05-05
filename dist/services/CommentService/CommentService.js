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
            const User = yield prisma.comment.findUnique({
                where: { id: commentId },
                select: { userId: true },
            });
            if ((User === null || User === void 0 ? void 0 : User.userId) !== user.id) {
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
    delete: (commentId, data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const currentUser = data.user;
            const user = yield prisma.comment.findUnique({
                where: { id: commentId },
                select: { userId: true },
            });
            if ((user === null || user === void 0 ? void 0 : user.userId) !== currentUser.id) {
                throw new Error("You do not have permission to delete this message");
            }
            const comment = yield prisma.comment.findUnique({
                where: {
                    id: commentId,
                },
            });
            const deleteCommentWitchChildren = (comment) => __awaiter(void 0, void 0, void 0, function* () {
                // find all the children have parent which is the comment we are deleting
                try {
                    const children = yield prisma.comment.findMany({
                        where: {
                            parent: {
                                id: comment.id,
                            },
                        },
                    });
                    for (const child of children) {
                        yield deleteCommentWitchChildren(child);
                    }
                    const commentDelete = yield prisma.comment.delete({
                        where: {
                            id: comment.id,
                        },
                    });
                    return Object.assign(Object.assign({}, commentDelete), { commentDelete });
                }
                catch (err) {
                    throw err;
                }
            });
            const deletedComment = yield deleteCommentWitchChildren(comment);
            return deletedComment;
        }
        catch (err) {
            throw err;
        }
    }),
};
//# sourceMappingURL=CommentService.js.map