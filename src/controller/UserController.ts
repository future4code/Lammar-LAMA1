import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { Login } from "../model/user/login";
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

            const token = await userBusiness.createUser(input);

            res.status(201).send({message: "user created successfully",token})

        }catch(error:any){
            return res.status(error.statusCode).send({message: error.message})
        }
    }

    login = async (req: Request, res:Response) =>{
        try{
            const {email, password} = req.body;

            const input: Login ={
                email,
                password
            };

            const token = await userBusiness.login(input)

            res.status(200).send({token})
        }catch(error:any){
            res.status(400).send({message: error.message})
        }
    }
}