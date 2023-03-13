import express from "express"
import { UserController } from "../controller/UserController"

const userController = new UserController();

export const userRoutes = express.Router();

userRoutes.post("", userController.createUser)
