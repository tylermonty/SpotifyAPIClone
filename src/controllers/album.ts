import express from "express";
import mongoose from "mongoose";
import { AlbumSchema } from "../models/album";
import { ArtistSchema } from "../models/artist";

const Album = mongoose.model("Album", AlbumSchema);
const Artist = mongoose.model("Artist", ArtistSchema);
export class AlbumController {

    public getAlbums(req: express.Request, res: express.Response): void {
        Album.find({}, (err, albums) => {
            if (err) { res.send(err); } else if (albums) { res.send(albums); }
        });
    }
    public getAlbumsByArtist(req: express.Request, res: express.Response): void {
        Album.find({artist: req.params.artist}, (err, albums) => {
            if (err) { res.send(err); } else if (albums) { res.send(albums); } else { res.send("could not find albums for given artist"); }
        });
    }
    public getAlbum(req: express.Request, res: express.Response): void {
        Album.findById(req.params.id, (err, album) => {
            if (err) { res.send(err); } else if (album) { res.send(album); } else { res.send("album not found"); }
        });
    }
    public createAlbum(req: express.Request, res: express.Response): void {
        const album = new Album(req.body);
        Artist.findById(req.body.artist, (err, artist) => {
            if (err) { res.send(err); } else if (artist) {
                album.save((saveErr, body) => {
                    if (saveErr) { res.send(saveErr); } else { res.send(body); }
                });
            } else { res.send("could not save album because artist not found"); }
        });
    }
    public updateAlbum(req: express.Request, res: express.Response): void {
        Album.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
            if (err) { res.send(err); } else { res.send(updated); }
        });
    }
    public deleteAlbum(req: express.Request, res: express.Response): void {
        Album.findByIdAndRemove(req.params.id, (err, removed) => {
            if (err) { res.send(err); } else { res.send(removed); }
        });
    }
}
