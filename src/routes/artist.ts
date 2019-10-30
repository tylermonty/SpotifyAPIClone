import express from "express";
import {ArtistController} from "../controllers/artist";

export class ArtistRouter {
    private router: express.Router = express.Router();
    private controller: ArtistController = new ArtistController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/artist", this.controller.getArtists);
        this.router.get("/artist/:id", this.controller.getArtist);
        this.router.post("/artist", this.controller.createArtist);
        this.router.put("/artist/:id", this.controller.updateArtist);
        this.router.delete("/artist/:id", this.controller.deleteArtist);

        return this.router;
    }
}
