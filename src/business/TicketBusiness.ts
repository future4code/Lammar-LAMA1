import { TicketDatabase } from "../data/TicketDatabase";
import { CustomError } from "../error/CustomError";
import { NotNullIdShow, NotNullName, NotNullPrice, NotNullQtyStock } from "../error/TicketError";
import { Ticket } from "../model/ticket/Ticket";
import { TicketInputDTO } from "../model/ticket/TicketInputDTO";
import { generateId } from "../services/generateID";

const ticketDatabase = new TicketDatabase()

export class TicketBusiness{
    createTicket = async(input: TicketInputDTO)=>{
        try{
            const {name, price, qty_stock, id_show} = input;

            if(!name){
                throw new NotNullName()
            }else if(!price){
                throw new NotNullPrice()
            }else if(!qty_stock){
                throw new NotNullQtyStock()
            }else if(!id_show){
                throw new NotNullIdShow()
            }

            const generatedId: string = generateId()

            const ticket: Ticket={
                id: generatedId,
                name,
                price,
                qty_stock,
                id_show
            }

            await ticketDatabase.createTicket(ticket)

            return ticket
        }catch(error: any){
            throw new CustomError(error.message, 400);
        }
    }

}