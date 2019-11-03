// router for playlist
import express from "express";
import {PlaylistController} from "../controllers/playlist";

export class PlaylistRouter {
    private router: express.Router = express.Router();
    private controller: PlaylistController = new PlaylistController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/playlist", this.controller.getPlaylists);
        this.router.get("/playlist/:id", this.controller.getPlaylist);
        this.router.post("/playlist", this.controller.createPlaylist);
        this.router.put("/playlist/:id", this.controller.updatePlaylist);
        this.router.delete("/playlist/:id", this.controller.deletePlaylist);

        return this.router;
    }
}
