import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/user/user";
import { UserInputDTO } from "../model/user/userInputDTO";
import { generateId } from "../services/generateID";

const userDatabase = new UserDatabase()
export class UserBusiness{
    createUser =async (input:UserInputDTO) => {
        
        const {name, email, password, role} = input;

        if(!name && !email && !password && !role){
            throw new Error("Insira o nome, email, password e role!")
        }

        const generatedId: string = generateId()

        const user: User={
            id: generatedId,
            name,
            email,
            password,
            role
        }

        await userDatabase.createUser(user)
    }
}