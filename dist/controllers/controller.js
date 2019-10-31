"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = require("../models/model");
const Hello = mongoose_1.default.model("Hello", model_1.HelloSchema);
class Controller {
    // gets all hellos from database
    getAllHellos(req, res) {
        Hello.find({}, (err, hello) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(hello);
            }
        });
    }
    // gets hellos only specific person from database
    getHellos(req, res) {
        const helloFrom = req.params.name;
        Hello.find({ from: helloFrom }, (err, hello) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(hello);
            }
        });
    }
    // saves hello to database
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