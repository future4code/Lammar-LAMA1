import { Request, Response } from "express";
import { BandBusinees } from "../business/BandBusiness";
import { Unauthorized } from "../error/UserError";
import { BandInputDTO } from "../model/band/bandInputDTO";
import { Role } from "../model/user/role";
import { Authenticator } from "../services/Authenticator";

const bandBusiness = new BandBusinees()
const authenticator = new Authenticator()


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
}