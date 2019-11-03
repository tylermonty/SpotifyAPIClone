import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import UserModel from "../models/user";

const User = UserModel;
export class UserController {
    public getUsers(req: express.Request, res: express.Response): void {
        User.find({}, (err, user) => {
            if (err) { res.send(err); } else { res.send(user); }
        });
    }
    public getUser(req: express.Request, res: express.Response): void {
        User.findById(req.params.id, (err, user) => {
            if (err) { res.send(err); } else if (user) { res.send(user); } else { res.send("user not found"); }
        });
    }
    public createUser(req: express.Request, res: express.Response): void {
        const user = new User(req.body);
        user.save((err, body) => {
            if (err) { res.send(err); } else { res.send(body); }
        });
    }
    public updateUser(req: express.Request, res: express.Response): void {
        User.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
            if (err) { res.send(err); } else { res.send(updated); }
        });
    }
    public deleteUser(req: express.Request, res: express.Response): void {
        User.findByIdAndRemove(req.params.id, (err, removed) => {
            if (err) { res.send(err); } else { res.send(removed); }
        });
    }
    public userLogin(req: express.Request, res: express.Response): void {
        User.findOne({email: req.body.email}, function(err, user) {
            if (err) {res.send(err); } else if (!user) {res.send("no user found with that email"); } else {
                user.comparePassword(req.body.password, (errmsg: string, isMatch: boolean) => {
                    if (!isMatch) { res.send(errmsg); } else {
                        const token = jwt.sign({ user }, process.env.SECRET_TOKEN);
                        res.send(token);
                    }
                });
            }
        });
    }
}
