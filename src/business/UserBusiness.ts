import { UserInputDTO } from "../model/user/userInputDTO";

export class UserBusiness{
    createUser =async (input:UserInputDTO) => {
        
        const {name, email, password, role} = input;

        if(!name && !email && !password && !role){
            throw new Error("Insira o nome, email, password e role!")
        }

    }
}