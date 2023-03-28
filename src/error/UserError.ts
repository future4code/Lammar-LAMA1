import { CustomError } from "./CustomError"

export class InvalidEmail extends CustomError{
    constructor(){
        super("enter a valid email.")
    }
}

export class InvalidCredentials extends CustomError{ 
    constructor(){
        super("invalid credentials")
    }
}
export class InvalidPassword extends CustomError{
    constructor(){
        super("password must be more than 6 characters.")
    }
}

export class InvalidRole extends CustomError{ 
    constructor(){
        super("invalid user type, choose between ADMIN and NORMAL")
    }
}

export class NotNullEmail extends CustomError{
    constructor(){
        super("email is required.")
    }
}

export class NotNullName extends CustomError{
    constructor(){
        super("name is required.")
    }
}
export class NotNullPassword extends CustomError{
    constructor(){
        super("password is required", 404)
    }
}
export class NotNullRole extends CustomError{
    constructor(){
        super("role is required", 404)
    }
}

export class NotNullToken extends CustomError{
    constructor(){
        super("token is required")
    }
}
export class PasswordIncorrect extends CustomError{
    constructor(){
        super("invalid password")
    }
} 
export class Unauthorized extends CustomError{ 
    constructor(){
        super("unauthorized user", 401)
    }
}
export class UserNotFound extends CustomError{
    constructor(){
        super("user not found", 404)
    }
}