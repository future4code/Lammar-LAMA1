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
}