import { createCredential } from "./credentialService";
import { UserRepositori } from "../repositori";
import User from "../entities/user";
import ICreateUserDto from "../interface/ICreateUserDto";
import Credential from "../entities/credentials";


export const getAllUsersService = async (): Promise<User[]> =>{
  const allUser: User[] = await UserRepositori.find({
      relations: ["turns"] 
  });
  return allUser;
};

// export const getUserByidService = async (id: number): Promise<User | null> => {
//   console.log(id);
//   const user: User | null = await UserRepositori.findOne({
//     where: { id },
//     relations: ["turns"],
//   });
//   if (!user) throw new Error("Usuario no encontrado");
//   return user;
// };
export const getUserByidService = async (id: number): Promise<User | null> => {
  const user = await UserRepositori.findOne({
      where: { id },
      relations: ["turns"],
  });
  return user;
};

export const createUserService = async (createUserDto: ICreateUserDto)=> {
const newCredential: Credential = await createCredential({
  username: createUserDto.username,
  password: createUserDto.password,
});
const newUser: User = UserRepositori.create(createUserDto);
newUser.Credential = newCredential;
await UserRepositori.save(newUser);
return newUser;
}

export const findUserByCredentialId = async (credentialId: number)=> {
const user: User | null = await UserRepositori.findOneBy({
  Credential: {id: credentialId}
});
if(!user) throw new Error("Usuario no encontrado");
return user;
};