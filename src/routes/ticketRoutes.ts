import express from "express"
import { TicketController } from "../controller/TicketController";

const ticketController = new TicketController()

export const ticketRoutes = express.Router()

ticketRoutes.post("", ticketController.createTicket)
