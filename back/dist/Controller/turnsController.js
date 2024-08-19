"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelarTurno = exports.agregarTurno = exports.turnosDeUser = exports.todosLosTurnos = void 0;
const turnsService_1 = require("../Service/turnsService");
const todosLosTurnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allAppoiments = yield (0, turnsService_1.getAllTurns)();
        res.status(200).json(allAppoiments);
    }
    catch (error) {
        res.status(404).json({ message: "Error al obtener el listado de todos los turnos." });
    }
});
exports.todosLosTurnos = todosLosTurnos;
const turnosDeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    try {
        const appoiments = yield (0, turnsService_1.getTurnById)(Number(id));
        res.status(200).json(appoiments);
    }
    catch (error) {
        res.status(404).json({ message: "Error al obtener el detalle del turno." });
    }
});
exports.turnosDeUser = turnosDeUser;
const agregarTurno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId, status } = req.body;
        const newTurn = yield (0, turnsService_1.createTurn)({
            date,
            time,
            userId,
            status
        });
        res.status(200).json(newTurn);
    }
    catch (error) {
        res.status(400).json({ message: "Error al agendar el turno." });
    }
});
exports.agregarTurno = agregarTurno;
const cancelarTurno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield (0, turnsService_1.cancelTurn)(Number(id));
        res.status(200).json({ message: "Turno cancelado" });
    }
    catch (error) {
        res.status(404).json({ message: "Error al cancelar el turno." });
    }
});
exports.cancelarTurno = cancelarTurno;
