"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const song_1 = require("../controllers/song");
class SongRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new song_1.SongController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        this.router.get("/song/artist/:artist", this.controller.getSongsByArtist);
        this.router.get("/song/album/:album", this.controller.getSongsByAlbum);
        this.router.get("/song/:id", this.controller.getSong);
        this.router.get("/song", this.controller.getSongs);
        this.router.post("/song", this.controller.createSong);
        this.router.put("/song/:id", this.controller.updateSong);
        this.router.delete("/song/:id", this.controller.deleteSong);
        return this.router;
    }
}
exports.SongRouter = SongRouter;
//# sourceMappingURL=song.js.map