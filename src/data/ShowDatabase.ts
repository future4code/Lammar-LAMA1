import { CustomError } from "../error/CustomError";
import { BandNotFound } from "../error/ShowError";
import { getShow } from "../model/show/getShow";
import { Show } from "../model/show/show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabse extends BaseDatabase{
    createShow = async(show: Show)=>{
        try{

            const queryResult = await ShowDatabse.connection("BAND")
            .select("*")
            .where({id: show.band_id})

            if(queryResult.length < 1){
                throw new BandNotFound()
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

    getShow = async(input:getShow)=>{
        try{

            const queryResult = await ShowDatabse.connection("SHOWS")
            .select("*")
            .where({week_day: input.week_day})

            if(queryResult.length <1){
                throw new Error("Nenhum show foi programado para esse dia.")
            }

            return queryResult[0]
        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)

        }
    }
}