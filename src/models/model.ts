import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const HelloSchema = new Schema(
    {
        from: {type: String},
        hello: {type: String, required: "hello message"}
    }
);
