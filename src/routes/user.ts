// router for user
import express from "express";
import {UserController} from "../controllers/user";

export class UserRouter {
    private router: express.Router = express.Router();
    private controller: UserController = new UserController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/user", this.controller.getUsers);
        this.router.get("/user/login/", this.controller.userLogin);
        this.router.get("/user/:id", this.controller.getUser);
        this.router.post("/user", this.controller.createUser);
        this.router.put("/user/:id", this.controller.updateUser);
        this.router.delete("/user/:id", this.controller.deleteUser);

        return this.router;
    }
}
