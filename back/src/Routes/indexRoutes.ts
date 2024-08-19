import { Router } from "express";
import userRoutes from "./userRoutes";
import turnsRoutes from "./turnsRoutes";

const indexRouter = Router();

indexRouter.use("/users",userRoutes);
indexRouter.use("/appointments",turnsRoutes);

export default indexRouter;