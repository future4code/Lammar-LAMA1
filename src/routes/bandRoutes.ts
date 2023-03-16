import express from "express"
import { BandController } from "../controller/BandController";

const bandController = new BandController();

export const bandRoutes = express.Router();

bandRoutes.post("", bandController.createBand)
