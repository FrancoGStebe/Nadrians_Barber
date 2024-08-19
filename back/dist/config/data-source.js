"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const user_1 = __importDefault(require("../entities/user"));
const turns_1 = __importDefault(require("../entities/turns"));
const credentials_1 = __importDefault(require("../entities/credentials"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    synchronize: true,
    dropSchema: true,
    logging: ["error"],
    entities: [user_1.default, turns_1.default, credentials_1.default],
    subscribers: [],
    migrations: [],
});
