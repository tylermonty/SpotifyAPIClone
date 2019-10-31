"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.HelloSchema = new Schema({
    from: { type: String },
    hello: { type: String, required: "hello message" }
});
//# sourceMappingURL=model.js.map