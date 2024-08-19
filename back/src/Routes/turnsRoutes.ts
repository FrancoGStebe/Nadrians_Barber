import { Router } from "express";
import { todosLosTurnos, turnosDeUser, cancelarTurno, agregarTurno } from "../Controller/turnsController";

const routerTurns: Router = Router();

routerTurns.get("/", todosLosTurnos);
routerTurns.get("/:id",turnosDeUser);
//
routerTurns.post("/schedule", agregarTurno);
routerTurns.put("/cancel/:id", cancelarTurno);

export default routerTurns;