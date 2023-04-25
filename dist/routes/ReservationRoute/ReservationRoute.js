"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ReservationController_1 = require("../../controllers/ReservationController/ReservationController");
const reservationRoute = express_1.default.Router();
reservationRoute.post("/", ReservationController_1.ReservationController.create);
exports.default = reservationRoute;
//# sourceMappingURL=ReservationRoute.js.map