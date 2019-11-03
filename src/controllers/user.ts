import express from "express";
import mongoose from "mongoose";
import { UserSchema } from "../models/user";

const User = mongoose.model("User", UserSchema);
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
}
