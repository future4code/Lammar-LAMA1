import { Show } from "../model/show/show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabse extends BaseDatabase{
    createShow = async(show: Show)=>{
        try{

            const queryResult = await ShowDatabse.connection("BAND")
            .select("*")
            .where({id: show.band_id})

            if(queryResult.length < 1){
                throw new Error("Banda não localizada")
            }

            await ShowDatabse.connection
            .insert({
                id: show.id,
                week_day: show.week_day,
                start_time: show.start_time,
                end_time: show.end_time,
                band_id: show.band_id
            }).into("SHOWS")

        }catch(error:any){
            throw new Error(error.message)
        }
    }
}