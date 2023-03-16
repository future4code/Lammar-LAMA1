import { CustomError } from "./CustomError";

export class BandNotFound extends CustomError{
    constructor(){
        super("band not found")
    }
}

export class NameAlreadyExists extends CustomError{
    constructor(){
        super("we already have a band with that name registered")
    }
}
export class NotNullMusicGenre extends CustomError{
    constructor(){
        super("music genre is required.")
    }
}

export class NotNullName extends CustomError{
    constructor(){
        super("name is required.")
    }
}

export class NotNullResponsible extends CustomError{
    constructor(){
        super("responsible is required.")
    }
}
