import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema(
    {
        email: {type: String, required: "email", unique: true},
        info: {firstName: {type: String}, lastName: {type: String}, age: {type: Number}, required: "user info"},
        password: {type: String, required: "password"},
        user: {type: String, required: "user name", unique: true}
    }
);
