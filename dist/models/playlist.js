"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// playlist model
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.PlaylistSchema = new Schema({
    creator: { type: String, required: true },
    followers: { type: Number, required: true },
    songs: { type: [String] },
    title: { type: String, required: true }
});
//# sourceMappingURL=playlist.js.map