import express from "express";
import mongoose from "mongoose";
import {HelloSchema} from "../models/model";

const Hello = mongoose.model("Hello", HelloSchema);
export class Controller {
    // gets all hellos from database
    public getAllHellos(req: express.Request, res: express.Response): void {
        Hello.find({}, (err, hello) => {
            if (err) { res.send(err); } else { res.send(hello); }
        });
    }
    // gets hellos only specific person from database
    public getHellos(req: express.Request, res: express.Response): void {
         const helloFrom = req.params.name;
         Hello.find({from: helloFrom}, (err, hello) => {
            if (err) { res.send(err); } else { res.send(hello); }
         });
    }
    // saves hello to database
    public postHello(req: express.Request, res: express.Response): void {
        const hello = new Hello(req.body);
        hello.save((err, body) => {
            if (err) { res.send(err); } else { res.send(body); }
        });
    }
}
