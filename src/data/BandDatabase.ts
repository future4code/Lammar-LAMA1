import { Unauthorized } from "../error/UserError";
import { Band } from "../model/band/band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDataBase extends BaseDatabase{
    createBand = async(band: Band)=>{
        try{
            const queryResult = await BaseDatabase.connection
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
}