import { ShowDatabse } from "../data/ShowDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidStartTime, InvalidTime, NotNullBandId, NotNullEndTime, NotNullStartTime, NotNullWeekDay } from "../error/ShowError";
import { Show } from "../model/show/show";
import { ShowInputDTO } from "../model/show/showInputDTO";
import { generateId } from "../services/generateID";

const showDatabase = new ShowDatabse()

export class ShowBusiness{
    createShow = async(input: ShowInputDTO)=>{
        try{

            const {week_day, start_time, end_time, band_id} = input

            if(!week_day){
                throw new NotNullWeekDay()
            }else if(!start_time){
                throw new NotNullStartTime()
            }else if(!end_time){
                throw new NotNullEndTime()
            }else if(!band_id){
                throw new NotNullBandId()
            }

            if(start_time < 8 || start_time > 23  ){
                throw new InvalidTime()
            }else if(end_time <8 || end_time > 23){
                throw new InvalidTime()
            }

            if(start_time > end_time){
                throw new InvalidStartTime()
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