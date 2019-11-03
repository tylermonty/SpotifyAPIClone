"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.UserSchema = new Schema({
    email: { type: String, required: "email", unique: true },
    info: { firstName: { type: String }, lastName: { type: String }, age: { type: Number } },
    password: { type: String, required: "password" },
    user: { type: String, required: "user name", unique: true }
});
//# sourceMappingURL=user.js.map