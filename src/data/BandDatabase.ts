import { BandNotFound, NameAlreadyExists } from "../error/BandError";
import { CustomError } from "../error/CustomError";
import { Band } from "../model/band/band";
import { GetBand } from "../model/band/getBand";
import { BaseDatabase } from "./BaseDatabase";

export class BandDataBase extends BaseDatabase{
    createBand = async(band: Band)=>{
        try{

            const queryResult = await BandDataBase.connection("BAND")
            .select("*")
            .where({name: band.name})

            if(queryResult.length >= 1){
                throw new NameAlreadyExists()
            }

            await BaseDatabase.connection
            .insert({
                id: band.id,
                name: band.name,
                music_genre: band.music_genre,
                responsible: band.responsible
            }).into("BAND")


        }catch(error:any){
            throw new Error(error.message)
        }
    }

    getBand = async(input: GetBand)=>{
        try{
            const queryResult = await BandDataBase.connection("BAND")
            .select("*")
            .where({name: input.name})

            if (queryResult.length <1){
                throw new BandNotFound()
            }

            return queryResult[0]
        }catch(error: any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
}