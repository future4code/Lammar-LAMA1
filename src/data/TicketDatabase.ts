import { ShowNotFound } from "../error/TicketError";
import { Ticket } from "../model/ticket/Ticket";
import { BaseDatabase } from "./BaseDatabase";

export class TicketDatabase extends BaseDatabase{
    createTicket = async(ticket: Ticket) =>{
        try{

            const queryResult = await TicketDatabase.connection("SHOWS")
            .select("*")
            .where({id: ticket.id_show})

            if(queryResult.length <1){
                throw new ShowNotFound()
            }

            await TicketDatabase.connection
            .insert({
                id: ticket.id,
                name: ticket.name,
                price: ticket.price,
                qty_stock: ticket.qty_stock,
                qty_sold: ticket.qty_sold,
                id_show: ticket.id_show
            }).into("TICKET_LAMA")

        }catch(error:any){
            throw new Error(error.message)
        }
    }
}