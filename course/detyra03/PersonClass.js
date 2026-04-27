import { EventEmitter } from "events";

export default class PersonClass extends EventEmitter {

    constructor(name) {
        super();
        this.name = name;    
    }

    speaks(msg) {
        console.log(msg);
    }
}


