
let count = 0;

function Person(name, address) {
    this.name = name;
    this.address = address;
    count++;
}

Person.prototype.getInfo = function() {
    console.log(`Name: ${this.name}, address: ${this.address}`);
}

Person.prototype.getCount = function() {
    console.log(`${count} persons are created`);
}


// class Person {
//     static count = 0;

//     constructor(name, address) {    
//         this.name = name;
//         this.address = address;
//         Person.count++;
//     }

//     getInfo() {
//         console.log(`Name: ${this.name}, address: ${this.address}`);
//     }

//     getCount() {
//         console.log(`${Person.count} persons are created`);
//     }
// }


module.exports = Person;