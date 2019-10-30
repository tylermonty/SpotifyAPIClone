import express from "express";
import mongoose from "mongoose";
import {HelloSchema} from "../models/model";

const Hello = mongoose.model("Hello", HelloSchema);
export class Controller {
    public getHello(req: express.Request, res: express.Response): void {
        Hello.find({}, (err, hello) => {
            if (err) { res.send(err); } else { res.send(hello); }
        });
    }
    public postHello(req: express.Request, res: express.Response): void {
        const hello = new Hello(req.body);
        hello.save((err, body) => {
            if (err) { res.send(err); } else { res.send(body); }
        });
    }
}
