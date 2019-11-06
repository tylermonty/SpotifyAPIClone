"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// album router
const express_1 = __importDefault(require("express"));
const album_1 = require("../controllers/album");
class AlbumRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new album_1.AlbumController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        this.router.get("/album/artist/:artist", this.controller.getAlbumsByArtist);
        this.router.get("/album", this.controller.getAlbums);
        this.router.get("/album/:id", this.controller.getAlbum);
        this.router.post("/album", this.controller.createAlbum);
        this.router.put("/album/:id", this.controller.updateAlbum);
        this.router.delete("/album/:id", this.controller.deleteAlbum);
        return this.router;
    }
}
exports.AlbumRouter = AlbumRouter;
//# sourceMappingURL=album.js.map