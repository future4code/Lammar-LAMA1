import { CustomError } from "./CustomError";

export class NotNullWeekDay extends CustomError{
    constructor(){
        super("week day is required.")
    }
}
export class NotNullStartTime extends CustomError{
    constructor(){
        super("start end is required.")
    }
}
export class NotNullEndTime extends CustomError{
    constructor(){
        super("end end is required.")
    }
}

export class NotNullBandId extends CustomError{
    constructor(){
        super("band id is required.")
    }
}

export class InvalidTime extends CustomError{
    constructor(){
        super("invalid time.")
    }
}