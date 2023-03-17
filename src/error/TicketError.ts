import { CustomError } from "./CustomError";

export class NotNullName extends CustomError{
    constructor(){
        super("name is required.")
    }
}
export class NotNullPrice extends CustomError{
    constructor(){
        super("price is required.")
    }
}
export class NotNullQtyStock extends CustomError{
    constructor(){
        super("qty_stock is required.")
    }
}
export class NotNullIdShow extends CustomError{
    constructor(){
        super("id_show is required.")
    }
}

export class ShowNotFound extends CustomError{
    constructor(){
        super("show not found")
    }
}


