import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { Unauthorized } from "../error/UserError";
import { ShowInputDTO } from "../model/show/showInputDTO";
import { Week_day } from "../model/show/week_day";
import { Role } from "../model/user/role";
import { Authenticator } from "../services/Authenticator";

const authenticator = new Authenticator()
const showBusiness = new ShowBusiness()

export class ShowController{
    createShow = async(req: Request, res: Response)=>{
        try{
            const input: ShowInputDTO={
                week_day: req.body.week_day,
                start_time: req.body.start_time,
                end_time: req.body.end_time,
                band_id: req.body.band_id,
                token: req.headers.authorization as string
            };

            const data = authenticator.getTokenData(input.token);

            if(data.role.toUpperCase() != Role.ADMIN){
                throw new Unauthorized()
            }

            if(input.week_day.toUpperCase() != Week_day.FRIDAY && input.week_day.toUpperCase() != Week_day.SATURDAY && input.week_day.toUpperCase() != Week_day.SUNDAY){
                return res.status(400).send({message: "there will be no show that day of the week"})
            }

            const token = await showBusiness.createBand(input);
            
            res.status(201).send({message: "show created successfully", token})
            
        }catch(error:any){
            return res.status(error.statusCode).send({message: error.message})
        }
    }
}