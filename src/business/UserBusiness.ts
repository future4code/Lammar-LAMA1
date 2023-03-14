import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateID";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Role } from "../model/user/role";
import { User } from "../model/user/user";
import { UserInputDTO } from "../model/user/userInputDTO";
import { InvalidEmail, InvalidPassword, InvalidRole,
        NotNullEmail, NotNullName, NotNullPassword, NotNullRole, PasswordIncorrect, UserNotFound } 
from "../error/UserError";
import { CustomError } from "../error/CustomError";
import { Login } from "../model/user/login";

const authenticator = new Authenticator()
const userDatabase = new UserDatabase()
const hashManager = new HashManager();


export class UserBusiness{
    createUser =async (input:UserInputDTO) => {

        try{
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
    
            const hashPassword: string = await hashManager.hash(password)
    
            const user: User={
                id,
                name,
                email,
                password: hashPassword,
                role
            }
            const token = authenticator.generateToken({id, role})
            
            await userDatabase.createUser(user)
            
            return token
        }catch(error:any){
            throw new CustomError(error.message, 400)
        }
    }

    login = async (input: Login) =>{
        try{
            const {email, password} = input;

            if(!email){
                throw new NotNullEmail()
            }else if(!password){
                throw new NotNullPassword()
            }

            if (!email.includes("@")) {
                throw new InvalidEmail();
              }

            const user = await userDatabase.findUserByEmail(email);

            if(!user){
                throw new UserNotFound()
            }

            const isValidPassword: boolean = await hashManager.compare(
                password,
                user.password
            );

            if(!isValidPassword){
                throw new PasswordIncorrect();
                
            }

            const token = authenticator.generateToken({id: user.id, role:user.role})

            return token
        }catch(error:any){
            throw new CustomError(error.message)
        }
    };
        
}