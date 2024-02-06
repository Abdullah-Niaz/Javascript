// let,var,const

// try not to  use var 
// because of issue in block scope and functional scope
let name = "Omer Ali";
const cnic = 362014636045433;
let address = "Lahore";
let php;

console.log(name,cnic,address,php);
console.table([name,cnic,address,php]);


let a = 20;
let b = 40;
let c = a + b;
console.log(c);

// Primitive Data Types
    // string
    // number
    // undefined
    // bolean



// Refrenced Data Types
// Objects
let person = {
    name : "Ali",
    age : 20
};

person.name = "omer";
person.age = 30;

console.log(person.name);
console.log(person.age);

// Array