"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
const PORT = process.env.PORT || 8000;
app.use("/api/v1", index_1.default);
app.use("/", (req, res) => {
    return res.status(200).json("AKFJL");
});
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
//# sourceMappingURL=index.js.map