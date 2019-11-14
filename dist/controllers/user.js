"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../models/user");
const User = mongoose_1.default.model("User", user_1.UserSchema);
class UserController {
    getUsers(req, res) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(user);
            }
        });
    }
    getUser(req, res) {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                res.send(err);
            }
            else if (user) {
                res.send(user);
            }
            else {
                res.send("user not found");
            }
        });
    }
    createUser(req, res, next) {
        const user = new User(req.body);
        user.save(function (err, body) {
            if (err) {
                return next(err);
            }
            else {
                res.send(body);
            }
        });
    }
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(updated);
            }
        });
    }
    deleteUser(req, res) {
        User.findByIdAndRemove(req.params.id, (err, removed) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(removed);
            }
        });
    }
    userLogin(req, res) {
        const person = User.findOne({ email: req.body.email }, function (err, user1) {
            if (err) {
                res.send(err);
            }
            else if (!user1) {
                res.send("no user found with that email");
            }
            else {
                user1.schema.methods.comparePassword(req.body.password, (errmsg, isMatch) => {
                    if (!isMatch) {
                        res.send(errmsg);
                    }
                    else {
                        const token = jsonwebtoken_1.default.sign({ user1 }, "3erqwr42");
                        console.log(token);
                        res.send(user1.toJSON());
                        res.status(200).json({
                            token: "Bearer " + token,
                            user: user1.toJSON()
                        });
                    }
                });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.js.map