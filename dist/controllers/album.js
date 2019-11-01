"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const album_1 = require("../models/album");
const artist_1 = require("../models/artist");
const Album = mongoose_1.default.model("Album", album_1.AlbumSchema);
const Artist = mongoose_1.default.model("Artist", artist_1.ArtistSchema);
class AlbumController {
    getAlbums(req, res) {
        Album.find({}, (err, albums) => {
            if (err) {
                res.send(err);
            }
            else if (albums) {
                res.send(albums);
            }
        });
    }
    getAlbumsByArtist(req, res) {
        Album.find({ artist: req.params.artist }, (err, albums) => {
            if (err) {
                res.send(err);
            }
            else if (albums) {
                res.send(albums);
            }
            else {
                res.send("could not find albums for given artist");
            }
        });
    }
    getAlbum(req, res) {
        Album.findById(req.params.id, (err, album) => {
            if (err) {
                res.send(err);
            }
            else if (album) {
                res.send(album);
            }
            else {
                res.send("album not found");
            }
        });
    }
    createAlbum(req, res) {
        const album = new Album(req.body);
        Artist.findById(req.body.artist, (err, artist) => {
            if (err) {
                res.send(err);
            }
            else if (artist) {
                album.save((saveErr, body) => {
                    if (saveErr) {
                        res.send(saveErr);
                    }
                    else {
                        res.send(body);
                    }
                });
            }
            else {
                res.send("could not save album because artist not found");
            }
        });
    }
    updateAlbum(req, res) {
        Album.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(updated);
            }
        });
    }
    deleteAlbum(req, res) {
        Album.findByIdAndRemove(req.params.id, (err, removed) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(removed);
            }
        });
    }
}
exports.AlbumController = AlbumController;
//# sourceMappingURL=album.js.map