"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    createUser(req, res) {
        const user = new User(req.body);
        user.save((err, body) => {
            if (err) {
                res.send(err);
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
}
exports.UserController = UserController;
//# sourceMappingURL=user.js.map