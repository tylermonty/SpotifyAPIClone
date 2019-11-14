// album model
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const AlbumSchema = new Schema(
    {
        artist: {type: String, required: true},
        genre: {type: String},
        title: {type: String, required: true}
    }
);
