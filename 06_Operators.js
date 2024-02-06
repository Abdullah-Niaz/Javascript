let x = 5;
let y = 2;

// Addition
let z = x + y;
console.log("Addition: " + z);

// Subtraction
let zz = x - y;
console.log("Subtraction: " +zz);

//  Multipilcation
let z1 = x * y;
console.log("Multiplication: "+z1);

// Power
let z2 = x ** y;
console.log("Power: " + z2);

// Division 
let z3 = x / y;
console.log("Division: "+z3);

// MOdulus 
let z4 = x % y;
console.log("Modulus: "+z4);

// Increament Operator
// Post Increamnet
let z5 = x++;
console.log("Post Increment: "+z5);
// Pree Increamnet
let z6 = ++x;
console.log("Pree Increment: "+z6);
// Decrement Operator
// Post Decrement
let z7 = x--;
console.log("Post Decrement"+ z7);
// Pree decrement
let z8 = --x;
console.log("Pree Decrement: "+z8);



// data Types are not Checked here
console.log(x == y);
console.log(x != y);
// These also check the data Types
console.log(x === y);
console.log(x !== y );

console.log( x > y );
console.log( x < y );
console.log( x <= y );
console.log( x >= y );


let text1 = "A";
let text2 = "B";
let result1 = text1 < text2;
console.log("Because A = 65 & B = 66 so 65 < 66: "+result1)

let text11 = "20";
let text22 = "5";
let result2 = text11 < text22;
console.log(result2);


let text111 = "John";
let text222 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3);


let txt1 = "What a very ";
txt1 += "nice day";
console.log(txt1);


{
    let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
console.log(x);
console.log(y);
console.log(z);
}


{
    // javascript Logical Operators
    let a = 20;
    let b = 40;
    console.log(a.instanceof);
    console.log( a < b && (a + 50) > b);
    console.log( a < b || (a + 50) < b);
    console.log();
}