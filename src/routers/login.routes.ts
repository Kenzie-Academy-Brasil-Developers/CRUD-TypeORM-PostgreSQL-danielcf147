import { Router } from "express";
import loginUserController from "../controllers/loginUser.controller";

const loginRoutes = Router();

loginRoutes.post("", loginUserController);

export default loginRoutes;
