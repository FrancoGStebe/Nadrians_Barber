import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import User from "../entities/user";
import Turns from "../entities/turns";
import Credential from "../entities/credentials";
import { error } from "console";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: false,
    dropSchema: false,
    logging: ["error"],
    entities: [User, Turns, Credential],
    subscribers: [],
    migrations: [],
})