"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// router for user
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const passport_1 = require("../security/passport");
class UserRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new user_1.UserController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        this.router.get("/", this.controller.getUsers);
        this.router.post("/login", this.controller.userLogin);
        this.router.get("/:id", passport_1.PassportService.requireAuth, this.controller.getUser);
        this.router.post("/", this.controller.createUser);
        this.router.put("/:id", this.controller.updateUser);
        this.router.delete("/:id", this.controller.deleteUser);
        return this.router;
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.js.map