import { CustomError } from "../error/CustomError";
import { User } from "../model/user/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    createUser = async(user: User) =>{
        try{
            await UserDatabase.connection
            .insert({
                id: user.id,
                name:user.name,
                email: user.email,
                password: user.password,
                role: user.role
            }).into("USER_LAMA")
        }catch(error: any){
            throw new Error(error.message)
        }
    }

    
    findUserByEmail = async(email: string) =>{
        try{
            const result = await UserDatabase.connection("USER_LAMA")
            .select().where({email})

            return result[0]
        }catch(error:any){
            throw new CustomError(error.message)
        }
    }
}