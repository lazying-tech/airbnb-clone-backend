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
            let ParentId = parentId;
            if (!user) {
                throw new Error("Login First");
            }
            console.log(createComment);
            if (!parentId) {
                ParentId = undefined;
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
};
//# sourceMappingURL=CommentService.js.map