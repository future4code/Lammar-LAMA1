import { UserInputDTO } from "../model/user/userInputDTO";

export class UserBusiness{
    createUser =async (user:UserInputDTO) => {
        
        const {name, email, password, role} = user;

        if(!name && !email && !password && !role){
            throw new Error("Insira o nome, email, password e role!")
        }

        
    }
}