"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.AlbumSchema = new Schema({
    artist: { type: String, required: "ID of artist" },
    title: { type: String, required: "album title" }
});
//# sourceMappingURL=album.js.map