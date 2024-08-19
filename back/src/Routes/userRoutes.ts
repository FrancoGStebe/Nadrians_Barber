import { Router } from "express";
import { getAllUser, getUserById, register, login } from "../Controller/userController";

const routerUser = Router();


routerUser.get("/",getAllUser);

routerUser.get("/:id", getUserById);

routerUser.post("/register", register);

routerUser.post("/login", login);

export default routerUser;