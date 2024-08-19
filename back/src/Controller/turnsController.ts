import { Request, Response } from "express";
import { getAllTurns, getTurnById, createTurn, cancelTurn } from "../Service/turnsService";
import Turns from "../entities/turns";

export const todosLosTurnos = async (req: Request, res: Response) => {
    try {
      const allAppoiments: Turns[] = await getAllTurns();
      res.status(200).json(allAppoiments);
    } catch (error) {
        res.status(404).json({ message: "Error al obtener el listado de todos los turnos." });
    }
}

export const turnosDeUser = async (req: Request<{id: string},{},{}>
    , res: Response) => {
        const { id } = req.params;
        console.log(id);
    try {
     const appoiments = await getTurnById(Number(id));
     res.status(200).json(appoiments);
        } catch (error) {
        res.status(404).json({ message: "Error al obtener el detalle del turno." });
    }
}

export const agregarTurno = async (req: Request, res: Response) => {
    try {
        const { date, time, userId, status} = req.body;
        const newTurn: Turns = await  createTurn({
            date,
            time,
            userId,
            status
        });
        res.status(200).json(newTurn);
    } catch (error) {
        res.status(400).json({ message: "Error al agendar el turno." });
    }
}

export const cancelarTurno = async (req: Request<{ id: string }, {}, {}>, res: Response) => {
    try {
        const id: string = req.params.id;
        await cancelTurn(Number(id));
        res.status(200).json({ message: "Turno cancelado" });
    } catch (error) {
        res.status(404).json({ message: "Error al cancelar el turno." });
    }
}
