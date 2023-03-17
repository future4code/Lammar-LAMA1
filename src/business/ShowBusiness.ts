import { ShowDatabse } from "../data/ShowDatabase";
import { CustomError } from "../error/CustomError";
import { Show } from "../model/show/show";
import { ShowInputDTO } from "../model/show/showInputDTO";
import { generateId } from "../services/generateID";

const showDatabase = new ShowDatabse()

export class ShowBusiness{
    createShow = async(input: ShowInputDTO)=>{
        try{

            const {week_day, start_time, end_time, band_id} = input

            if(!week_day && !start_time && !end_time && !band_id){
                throw new Error("Insira o week_day, start_time, end_time e band_id")
            }

            if(start_time < 8 || start_time > 23  ){
                throw new Error("Horário inválido")
            }else if(end_time <8 || end_time > 23){
                throw new Error("Horário inválido")
            }

            const generatedId: string = generateId()
            
            const show: Show={
                id: generatedId,
                week_day,
                start_time,
                end_time,
                band_id
            }
            
            await showDatabase.createShow(show)
            
        }catch(error:any){
            throw new CustomError(error.message, 400);
        }
    }
}