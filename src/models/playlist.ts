import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PlaylistSchema = new Schema(
    {
        creator: {type: String, required: "ID of user who created playlist"},
        // users not in API yet so this creator ID doesnt exist
        followers: {type: Number, required: "number of followers"},
        songs: {type: [String]}, // IDs of songs in playlist
        title: {type: String, required: "playlist title"}
    }
);
