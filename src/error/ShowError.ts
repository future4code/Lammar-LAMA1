import { CustomError } from "./CustomError";

export class BandNotFound extends CustomError{
    constructor(){
        super("band not found")
    }
}
export class InvalidTime extends CustomError{
    constructor(){
        super("invalid time.")
    }
}
export class InvalidStartTime extends CustomError{
    constructor(){
        super("start time cannot be greater than end time")
    }
}
export class NotAvailable extends CustomError{
    constructor(){
        super("there is already a show scheduled for that day and time.")
    }
}
export class NotNullBandId extends CustomError{
    constructor(){
        super("band id is required.")
    }
}
export class NotNullEndTime extends CustomError{
    constructor(){
        super("end end is required.")
    }
}
export class NotNullStartTime extends CustomError{
    constructor(){
        super("start end is required.")
    }
}
export class NotNullWeekDay extends CustomError{
    constructor(){
        super("week day is required.")
    }
}
export class NoShowScheduled extends CustomError{
    constructor(){
        super("no shows scheduled for that day.")
    }
}

