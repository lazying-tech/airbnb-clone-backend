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
exports.CommentController = void 0;
const CommentService_1 = require("../../services/CommentService/CommentService");
exports.CommentController = {
    create: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return res.status(200).json(yield CommentService_1.CommentService.create(req.body));
        }
        catch (err) {
            res.status(500).json("Something went wrong");
        }
    }),
};
//# sourceMappingURL=CommentController.js.map