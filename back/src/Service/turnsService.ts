import Turns from "../entities/turns";
import User from "../entities/user";
import { ISheduleAppoimentDto } from "../interface/ISheduleAppoinment";
import { TurnsRepositori, UserRepositori } from "../repositori";



export const getAllTurns = async (): Promise<Turns[]> => {
  const allAppoiments: Turns[] = await 
  TurnsRepositori.find();
  return allAppoiments;
}

export const getTurnById = async (id: number): Promise<Turns> => {
  const appoiments: Turns | null = await TurnsRepositori.findOneBy({
    id: id,
  });
  if (!appoiments) throw new Error("Turno inexistente");
  return appoiments;
};


export const createTurn = async (sheduleTurnDto: ISheduleAppoimentDto): Promise<Turns> => {
 const newTurn: Turns = TurnsRepositori.create(sheduleTurnDto);
 await TurnsRepositori.save(newTurn);
const user: User | null = await UserRepositori.findOneBy({
  id: sheduleTurnDto.userId,
});
if(!user) throw Error("Usuario inexistente");
newTurn.user = user;
await TurnsRepositori.save(newTurn);
return newTurn;
}

export const cancelTurn = async (id: number): Promise<void> => {
const appoiments: Turns | null = await 
TurnsRepositori.findOneBy({id: id});
if(!appoiments) throw new Error("Tunro inexistente");
appoiments.status = "cancelled";
await TurnsRepositori.save(appoiments);
}

