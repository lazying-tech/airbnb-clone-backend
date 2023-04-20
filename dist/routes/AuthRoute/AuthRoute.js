"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../../controllers/AuthController/AuthController");
const authRoute = express_1.default.Router();
authRoute.post("/register", AuthController_1.AuthController.register);
exports.default = authRoute;
//# sourceMappingURL=AuthRoute.js.map