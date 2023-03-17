import { TicketDatabase } from "../data/TicketDatabase";
import { CustomError } from "../error/CustomError";
import { Ticket } from "../model/ticket/Ticket";
import { TicketInputDTO } from "../model/ticket/TicketInputDTO";
import { generateId } from "../services/generateID";

const ticketDatabase = new TicketDatabase()

export class TicketBusiness{
    createTicket = async(input: TicketInputDTO)=>{
        try{
            const {name, price, qty_stock, id_show} = input;

            if(!name && !price && !qty_stock && !id_show){
                throw new Error("Insira os dados obrigatórios: nome, preço, qty stock, qty sold, id show.")
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

        }catch(error: any){
            throw new CustomError(error.message, 400);
        }
    }
}