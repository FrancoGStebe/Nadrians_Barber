import { Request, Response } from "express";
import { getAllUsersService , createUserService, findUserByCredentialId, getUserByidService } from "../Service/userService";
import User from "../entities/user";
import ICreateUserDto from "../interface/ICreateUserDto";
import ICreateCredentialDto from "../interface/ICreateCredentialDto";
import Credential from "../entities/credentials";
import { validateCredential } from "../Service/credentialService";

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);

    } catch (error) {
        res.status(404).json({ message: "Error al obtener el listado de todos los usuarios." });
    }
}


export const getUserById = async (req: Request<{id: string},{},{}>
    , res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        console.log(userId);
        const user: User | null = await getUserByidService(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: "Error al obtener el detalle del usuario." });
    }
}

export const register = async (req: Request<{},{},ICreateUserDto>
    , res: Response) => {
        try{
              const {name, email, birthdate, nDni, username, password} = req.body;
        const newUser: User = await createUserService({
            name,   
            email,       
            birthdate,    
            nDni,     
            username,
            password
        });
        res.status(200).json(newUser); 
        }
        catch{
            (error: any) => {
                res.status(400).json({message: error.message,});
            }
        }
     
}

export const login = async (req: Request<{},{}, ICreateCredentialDto>
    , res: Response) => {
    try{
        const {username, password} = req.body;
        const credential: Credential = await validateCredential({
            username,
            password,
        });
        const user: User | null = await findUserByCredentialId(credential.id);
        res.status(200).json(user)
    }
    catch (error) {
        res.status(400).json({ message: "Los datos son incorrectos." });
    }
}