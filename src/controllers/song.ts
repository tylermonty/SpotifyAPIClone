// song controller
import express from "express";
import mongoose from "mongoose";
import { SongSchema } from "../models/song";

const Song = mongoose.model("Song", SongSchema);
export class SongController {

    public getSongs(req: express.Request, res: express.Response): void {
        Song.find({}, (err, song) => {
            if (err) { res.send(err); } else { res.send(song); }
        });
    }
    public getSong(req: express.Request, res: express.Response): void {
        Song.findById(req.params.id, (err, song) => {
            if (err) { res.send(err); } else if (song) { res.send(song); } else { res.send("song not found"); }
        });
    }
    public createSong(req: express.Request, res: express.Response): void {
        const song = new Song(req.body);
        song.save((err, body) => {
            if (err) { res.send(err); } else { res.send(body); }
        });
    }
    public updateSong(req: express.Request, res: express.Response): void {
        Song.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
            if (err) { res.send(err); } else { res.send(updated); }
        });
    }
    public deleteSong(req: express.Request, res: express.Response): void {
        Song.findByIdAndRemove(req.params.id, (err, removed) => {
            if (err) { res.send(err); } else { res.send(removed); }
        });
    }
}
