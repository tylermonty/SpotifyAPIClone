import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema(
    {
        email: {type: String, required: "email", unique: true},
        user: {type: String, required: "user name", unique: true},
        password: {type: String, required: "password"},
        info:{firstName: {type: String}, lastName: {type: String}, age: {type: Number}, required: "user info"}     
    }
);

