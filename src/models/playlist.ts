// playlist model
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PlaylistSchema = new Schema(
    {
        creator: {type: String, required: true},
        followers: {type: Number, required: true},
        songs: {type: [String]}, // IDs of songs in playlist
        title: {type: String, required: true}
    }
);
