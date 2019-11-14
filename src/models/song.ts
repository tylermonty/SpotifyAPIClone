import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const SongSchema = new Schema(
    {
        album: {type: String}, // ID of album if on an album
        artist: {type: String, required: true},
        duration: {type: Number, required: true},
        features: {type: [String]}, // List of IDs of artists who are featured on song
        plays: {type: Number, required: true},
        title: {type: String, required: true}
    }
);
