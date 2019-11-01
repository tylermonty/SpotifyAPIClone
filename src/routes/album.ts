import express from "express";
import {AlbumController} from "../controllers/album";

export class AlbumRouter {
    private router: express.Router = express.Router();
    private controller: AlbumController = new AlbumController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/album/artist/:artist", this.controller.getAlbumsByArtist);
        this.router.get("/album/:id", this.controller.getAlbum);
        this.router.get("/album", this.controller.getAlbums);
        this.router.post("/album", this.controller.createAlbum);
        this.router.put("/album/:id", this.controller.updateAlbum);
        this.router.delete("/album/:id", this.controller.deleteAlbum);
        return this.router;
    }
}
