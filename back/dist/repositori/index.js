"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnsRepositori = exports.UserRepositori = exports.CredencialRepositori = void 0;
const data_source_1 = require("../config/data-source");
const credentials_1 = __importDefault(require("../entities/credentials"));
const turns_1 = __importDefault(require("../entities/turns"));
const user_1 = __importDefault(require("../entities/user"));
exports.CredencialRepositori = data_source_1.AppDataSource.getRepository(credentials_1.default);
exports.UserRepositori = data_source_1.AppDataSource.getRepository(user_1.default);
exports.TurnsRepositori = data_source_1.AppDataSource.getRepository(turns_1.default);
