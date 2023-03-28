import express from "express"
import { ShowController } from "../controller/ShowController.";

const showController = new ShowController();

export const showRoutes = express.Router();

showRoutes.post("", showController.createShow)
showRoutes.get("/:week_day", showController.getShows)