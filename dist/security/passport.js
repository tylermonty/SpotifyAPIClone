"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// import { Passport } from "passport";
const passport_1 = __importDefault(require("passport"));
// const Passport = require("passport");
const passport_jwt_1 = require("passport-jwt");
const passport_jwt_2 = require("passport-jwt");
const user_1 = require("../models/user");
const User = mongoose_1.default.model("User", user_1.UserSchema);
const jwtOptions = {
    jwtFromRequest: passport_jwt_2.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "3erqwr42"
};
// Setting up JWT login strategy
const JWTLogin = new passport_jwt_1.Strategy(jwtOptions, function (payload, done) {
    const id = new mongoose_1.default.Types.ObjectId(payload._id);
    User.findById(id, function (err, user) {
        if (err) {
            return done(err, "error");
        }
        if (user) {
            done(null, user);
        }
        else {
            done(null, "No user found");
        }
    });
});
passport_1.default.use(JWTLogin);
class PassportService {
}
exports.PassportService = PassportService;
PassportService.requireAuth = passport_1.default.authenticate("jwt", { session: false });
//# sourceMappingURL=passport.js.map