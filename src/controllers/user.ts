import express from "express";
import mongoose from "mongoose";
import { UserSchema } from "../models/user";

const User = mongoose.model("User", UserSchema);
export class UserController {

}
