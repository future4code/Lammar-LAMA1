import { BandDataBase } from "../data/BandDatabase";
import { NotNullMusicGenre, NotNullName, NotNullResponsible } from "../error/BandError";
import { CustomError } from "../error/CustomError";
import { Band } from "../model/band/band";
import { BandInputDTO } from "../model/band/bandInputDTO";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateID";

const authenticator = new Authenticator()
const bandDatabase = new BandDataBase()

export class BandBusinees{
    createBand = async(input: BandInputDTO)=>{
        try{

            const {name, music_genre, responsible} = input

            if(!name){
                throw new NotNullName()
            }else if(!music_genre){
                throw new NotNullMusicGenre()
            }else if(!responsible){
                throw new NotNullResponsible()
            }
            const generatedId: string = generateId()
            
            const band: Band={
                id: generatedId,
                name, 
                music_genre,
                responsible,
            }
            
            await bandDatabase.createBand(band)
            
        }catch(error:any){
            throw new CustomError(error.message, 400);
        }
    }
}