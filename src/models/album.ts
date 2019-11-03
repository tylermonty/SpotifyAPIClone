// album model
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const AlbumSchema = new Schema(
    {
        artist: {type: String}, // name of album,
        genre: {type: String},
        name: {type: String, required: "album name"},
        numberOfSongs: {type: Number}, // number of songs
        songs: {type: [String]}, // array of songs in the album
    }
);
