"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../Controller/userController");
const routerUser = (0, express_1.Router)();
routerUser.get("/", userController_1.getAllUser);
routerUser.get("/:id", userController_1.getUserById);
routerUser.post("/register", userController_1.register);
routerUser.post("/login", userController_1.login);
exports.default = routerUser;
