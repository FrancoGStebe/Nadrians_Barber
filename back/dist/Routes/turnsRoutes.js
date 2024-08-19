"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnsController_1 = require("../Controller/turnsController");
const routerTurns = (0, express_1.Router)();
routerTurns.get("/", turnsController_1.todosLosTurnos);
routerTurns.get("/:id", turnsController_1.turnosDeUser);
//
routerTurns.post("/schedule", turnsController_1.agregarTurno);
routerTurns.put("/cancel/:id", turnsController_1.cancelarTurno);
exports.default = routerTurns;
