import ICreateCredentialDto from "../interface/ICreateCredentialDto";
import Credential from "../entities/credentials";
import { CredencialRepositori } from "../repositori";
import IValidateCredentialDto from "../interface/IValidateCredentialDto";


export const createCredential = async (createCredentialDto: ICreateCredentialDto): Promise<Credential> =>{
const newCredential: Credential = CredencialRepositori.create(createCredentialDto);
await CredencialRepositori.save(newCredential);
return newCredential;
};


export const validateCredential = async (validateCredentialDto: IValidateCredentialDto): Promise<Credential> => {
  const {username, password} = validateCredentialDto;
  const foundCredential: Credential | null = await CredencialRepositori.findOneBy({username})
  if(!foundCredential)throw Error("Usuario o password no encontrado");
  if(password !== foundCredential?.password) throw Error("Usuario o password no encontrado");
  return foundCredential;
}