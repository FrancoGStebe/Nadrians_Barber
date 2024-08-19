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
exports.cancelTurn = exports.createTurn = exports.getTurnById = exports.getAllTurns = void 0;
const repositori_1 = require("../repositori");
const getAllTurns = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppoiments = yield repositori_1.TurnsRepositori.find();
    return allAppoiments;
});
exports.getAllTurns = getAllTurns;
const getTurnById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appoiments = yield repositori_1.TurnsRepositori.findOneBy({
        id: id,
    });
    if (!appoiments)
        throw new Error("Turno inexistente");
    return appoiments;
});
exports.getTurnById = getTurnById;
const createTurn = (sheduleTurnDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newTurn = repositori_1.TurnsRepositori.create(sheduleTurnDto);
    yield repositori_1.TurnsRepositori.save(newTurn);
    const user = yield repositori_1.UserRepositori.findOneBy({
        id: sheduleTurnDto.userId,
    });
    if (!user)
        throw Error("Usuario inexistente");
    newTurn.user = user;
    yield repositori_1.TurnsRepositori.save(newTurn);
    return newTurn;
});
exports.createTurn = createTurn;
const cancelTurn = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appoiments = yield repositori_1.TurnsRepositori.findOneBy({ id: id });
    if (!appoiments)
        throw new Error("Tunro inexistente");
    appoiments.status = "cancelled";
    yield repositori_1.TurnsRepositori.save(appoiments);
});
exports.cancelTurn = cancelTurn;
