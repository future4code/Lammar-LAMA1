import { Request, Response } from "express";
import { TicketBusiness } from "../business/TicketBusiness";
import { Unauthorized } from "../error/UserError";
import { BuyTicketDTO } from "../model/ticket/BuyTicketDTO";
import { TicketInputDTO } from "../model/ticket/TicketInputDTO";
import { Role } from "../model/user/role";
import { Authenticator } from "../services/Authenticator";

const authenticator = new Authenticator()
const ticketBusiness = new TicketBusiness()

export class TicketController{
    createTicket = async(req: Request, res: Response)=>{
        try{
            const input: TicketInputDTO={
                name: req.body.name,
                price: req.body.price,
                qty_stock: req.body.qty_stock,
                id_show: req.body.id_show,
                token: req.headers.authorization as string
            }

            const data = authenticator.getTokenData(input.token);

            if(data.role.toUpperCase() != Role.ADMIN){
                throw new Unauthorized()
            }

            const ticket = await ticketBusiness.createTicket(input);

            return res.status(201).send({message: "ticket created successfully", ticket})
        }catch(error: any){
            return res.status(error.statusCode).send({message: error.message})
        }
    }
}