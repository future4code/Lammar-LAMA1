import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowDatabse } from "../data/ShowDatabase";
import { CustomError } from "../error/CustomError";
import { Unauthorized } from "../error/UserError";
import { getShow } from "../model/show/getShow";
import { ShowInputDTO } from "../model/show/showInputDTO";
import { Week_day } from "../model/show/week_day";
import { Role } from "../model/user/role";
import { Authenticator } from "../services/Authenticator";

const authenticator = new Authenticator()
const showBusiness = new ShowBusiness()
const showDatabase = new ShowDatabse()

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

            const token = await showBusiness.createShow(input);
            
            return res.status(201).send({message: "show created successfully", token})
            
        }catch(error:any){
            return res.status(error.statusCode).send({message: error.message})
        }
    }

    getShows= async(req: Request, res: Response)=>{
        try{    
            const input: getShow={
                week_day: req.params.week_day,
                token: req.headers.authorization as string
            }

            if(input.week_day.toUpperCase() != Week_day.FRIDAY && input.week_day.toUpperCase() != Week_day.SATURDAY && input.week_day.toUpperCase() != Week_day.SUNDAY){
                return res.status(400).send({message: "There are only shows scheduled for Friday, Saturday and Sunday."})
            }

            const show = await showDatabase.getShow(input)
            res.status(200).send(show)
        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
}