"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// router for user
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
class UserRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new user_1.UserController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        this.router.get("/user", this.controller.getUsers);
        this.router.get("/user/:id", this.controller.getUser);
        this.router.post("/user", this.controller.createUser);
        this.router.put("/user/:id", this.controller.updateUser);
        this.router.delete("/user/:id", this.controller.deleteUser);
        return this.router;
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.js.map