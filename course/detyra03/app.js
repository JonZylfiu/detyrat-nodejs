import { EventEmitter } from "node:stream";
import PersonClass from "./PersonClass.js";
import PersonConstructor from "./PersonConstructor.js";

// Class implementation
const bill = new PersonClass("Bill");
const tom = new PersonClass("Tom");

bill.on("says", function() {
    this.speaks(`Hello from ${this.name}`);
})

tom.on("says", function() {
    this.speaks(`Hello from ${this.name}`);
})

bill.emit("says");
tom.emit("says");



// Constructor implementation
const emitter1 = new EventEmitter()
const emitter2 = new EventEmitter()

const bill = PersonConstructor("Bill")

emitter1.on("says", function() {
    bill.speaks(`Hello from ${this.name}`);
})

tom.on("says", function() {
    this.speaks(`Hello from ${this.name}`);
})

bill.emit("says");
tom.emit("says");




