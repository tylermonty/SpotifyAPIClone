"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.UserSchema = new Schema({
    email: { type: String, required: "email", unique: true },
    info: { firstName: { type: String }, lastName: { type: String }, age: { type: Number } },
    password: { type: String, required: "password" },
    user: { type: String, required: "user name", unique: true }
});
exports.UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    bcrypt_1.default.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt_1.default.hash(this.password, salt, (error, hash) => {
            if (error) {
                return next(error);
            }
            this.password = hash;
            next();
        });
    });
});
exports.UserSchema.methods.comparePassword =
    function (candidatePassword, callback) {
        bcrypt_1.default.compare(candidatePassword, this.password, function (err, isMatch) {
            if (err) {
                return callback(err, isMatch);
            }
            callback(null, isMatch);
        });
    };
exports.UserSchema.set("toJSON", {
    transform(doc, ret, options) {
        delete ret.password;
        return ret;
    }
});
const UserModel = mongoose_1.default.model("User", exports.UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.js.map