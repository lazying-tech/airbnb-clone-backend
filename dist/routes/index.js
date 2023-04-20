"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthRoute_1 = __importDefault(require("./AuthRoute/AuthRoute"));
const ListingRoute_1 = __importDefault(require("./ListingRoute/ListingRoute"));
const router = express_1.default.Router();
router.use("/auth", AuthRoute_1.default);
router.use("/listing", ListingRoute_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map