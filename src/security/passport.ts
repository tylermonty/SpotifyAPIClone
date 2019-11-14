import { VerifyCallback } from "jsonwebtoken";
import mongoose from "mongoose";
// import { Passport } from "passport";
import passport from "passport";
// const Passport = require("passport");
import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { UserSchema } from "../models/user";

const User = mongoose.model("User", UserSchema);
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "3erqwr42"
};

// Setting up JWT login strategy
const JWTLogin = new Strategy(jwtOptions, function(payload: any, done: VerifyCallback) {
    const id = new mongoose.Types.ObjectId(payload._id);
    User.findById(id, function(err: any, user: Document) {
        if (err) { return done(err, "error"); }

        if (user) {
            done(null, user);
        } else {
            done(null, "No user found");
        }
    });

});
passport.use(JWTLogin);
export class PassportService {
    public static requireAuth = passport.authenticate("jwt", { session: false });
 }
