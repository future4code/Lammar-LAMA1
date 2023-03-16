import { Request, Response } from "express";
import { BandBusinees } from "../business/BandBusiness";
import { BandDataBase } from "../data/BandDatabase";
import { CustomError } from "../error/CustomError";
import { Unauthorized } from "../error/UserError";
import { BandInputDTO } from "../model/band/bandInputDTO";
import { GetBand } from "../model/band/getBand";
import { Role } from "../model/user/role";
import { Authenticator } from "../services/Authenticator";

const authenticator = new Authenticator()
const bandBusiness = new BandBusinees()
const bandDataBase = new BandDataBase()

export class BandController{
    createBand = async(req: Request, res: Response)=>{
        try{
            const input: BandInputDTO={
                name: req.body.name, 
                music_genre: req.body.music_genre,
                responsible: req.body.responsible,
                token: req.headers.authorization as string
            };

            const data = authenticator.getTokenData(input.token);

            if(data.role.toUpperCase() != Role.ADMIN){
                throw new Unauthorized()
            }

            const token = await bandBusiness.createBand(input);
            res.status(201).send({message: "band created successfully", token})
            
        }catch(error:any){
            return res.status(error.statusCode).send({message: error.message})
        }
    }

    getBand = async(req: Request, res: Response)=>{
        try{
            const input: GetBand={
                id: req.params.id,
                token: req.headers.authorization as string
            }

            const band = await bandDataBase.getBand(input)

            res.status(200).send(band)
        }catch(error: any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
}