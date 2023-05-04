"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthRoute_1 = __importDefault(require("./AuthRoute/AuthRoute"));
const ListingRoute_1 = __importDefault(require("./ListingRoute/ListingRoute"));
const ReservationRoute_1 = __importDefault(require("./ReservationRoute/ReservationRoute"));
const CommentRoute_1 = __importDefault(require("./CommentRoute/CommentRoute"));
const router = express_1.default.Router();
router.use("/auth", AuthRoute_1.default);
router.use("/listing", ListingRoute_1.default);
router.use("/favorites", ListingRoute_1.default);
router.use("/reservations", ReservationRoute_1.default);
router.use("/comments", CommentRoute_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map