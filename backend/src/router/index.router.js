import { Router } from "express";
import {
  getUsers,
  postUsers,
  deleteUsers,
  updateUsers,
} from "../func/controllers.js";
const indexRouter = Router();

indexRouter.get("/", getUsers);
indexRouter.post("/", postUsers);
indexRouter.delete("/", deleteUsers);
indexRouter.patch("/", updateUsers);

export default indexRouter;
