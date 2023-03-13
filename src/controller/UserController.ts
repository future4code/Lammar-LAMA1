import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user/userInputDTO";

const userBusiness = new UserBusiness()

export class UserController{
    createUser = async(req: Request, res: Response)=>{
        try{
            const input: UserInputDTO={
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
            };

            const response = userBusiness.createUser(input);

            res.status(201).send({message: "user created successfully", response})

        }catch(error:any){
            return res.status(error.statusCode).send({message: error.message})
        }
    }
}