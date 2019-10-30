"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = require("../models/model");
const Hello = mongoose_1.default.model("Hello", model_1.HelloSchema);
class Controller {
    getHello(req, res) {
        Hello.find({}, (err, hello) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(hello);
            }
        });
    }
    postHello(req, res) {
        const hello = new Hello(req.body);
        hello.save((err, body) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(body);
            }
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map