"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.SongSchema = new Schema({
    album: { type: String },
    artist: { type: String, required: true },
    duration: { type: Number, required: true },
    features: { type: [String] },
    plays: { type: Number, required: true },
    title: { type: String, required: true }
});
//# sourceMappingURL=song.js.map