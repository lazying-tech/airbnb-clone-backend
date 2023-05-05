"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CommentController_1 = require("../../controllers/CommentController/CommentController");
const commentRoute = express_1.default.Router();
commentRoute.post("/", CommentController_1.CommentController.create);
commentRoute.patch("/:commentId", CommentController_1.CommentController.update);
commentRoute.patch("/delete/:commentId", CommentController_1.CommentController.delete);
exports.default = commentRoute;
//# sourceMappingURL=CommentRoute.js.map