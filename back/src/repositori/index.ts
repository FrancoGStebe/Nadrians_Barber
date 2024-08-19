import { AppDataSource } from "../config/data-source";
import Credential from "../entities/credentials";
import Turns from "../entities/turns";
import User from "../entities/user";


export const CredencialRepositori = AppDataSource.getRepository(Credential);
export const UserRepositori = AppDataSource.getRepository(User);
export const TurnsRepositori = AppDataSource.getRepository(Turns);

