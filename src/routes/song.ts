// router for song
import express from "express";
import {SongController} from "../controllers/song";

export class SongRouter {
    private router: express.Router = express.Router();
    private controller: SongController = new SongController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/song", this.controller.getSongs);
        this.router.get("/song/:id", this.controller.getSong);
        this.router.post("/song", this.controller.createSong);
        this.router.put("/song/:id", this.controller.updateSong);
        this.router.delete("/song/:id", this.controller.deleteSong);

        return this.router;
    }
}
