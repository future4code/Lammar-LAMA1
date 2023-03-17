import { Ticket } from "../model/ticket/Ticket";
import { BaseDatabase } from "./BaseDatabase";

export class TicketDatabase extends BaseDatabase{
    createTicket = async(ticket: Ticket) =>{
        try{

            await TicketDatabase.connection
            .insert({
                id: ticket.id,
                name: ticket.name,
                price: ticket.price,
                qty_stock: ticket.qty_stock,
                qty_sold: ticket.qty_sold
            }).into("TICKET_LAMA")

        }catch(error:any){
            throw new Error(error.message)
        }
    }
}