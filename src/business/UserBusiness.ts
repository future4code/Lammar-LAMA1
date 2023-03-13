import { UserDatabase } from "../data/UserDatabase";
import { InvalidEmail, InvalidPassword, InvalidRole,
        NotNullEmail, NotNullName, NotNullPassword, NotNullRole } 
from "../error/UserError";
import { Role } from "../model/user/role";
import { User } from "../model/user/user";
import { UserInputDTO } from "../model/user/userInputDTO";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateID";

const userDatabase = new UserDatabase()
const authenticator = new Authenticator()

export class UserBusiness{
    createUser =async (input:UserInputDTO) => {
        
        const {name, email, password, role} = input;

        if(!name){
            throw new NotNullName()
        }else if(!email){
            throw new NotNullEmail()
        }else if(!password){
            throw new NotNullPassword()
        }else if(!role){
            throw new NotNullRole()
        }else if(!email.includes("@")){
            throw new InvalidEmail();
        }else if(password.length <=6){
            throw new InvalidPassword()
        }

        if(role.toUpperCase() != Role.ADMIN && role.toUpperCase() != Role.NORMAL){
            throw new InvalidRole()
        }

        const id: string = generateId()

        const user: User={
            id,
            name,
            email,
            password,
            role
        }

        await userDatabase.createUser(user)
        const token = authenticator.generateToken({id, role})
        return token
    }
}