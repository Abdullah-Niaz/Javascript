// Deep Copy 
var a = 20;
var b = a;
console.log("Value of a:" + a);
console.log("Value of b:" + b);
a = 30;
console.log("After changing values:\n");
console.log("Value of a:" + a);
console.log("Value of b:" + b);


// Deep Copy
var a = [1,2,3,5];
var b = a;
console.log(a);
console.log(b);
a.pop();
console.log(a);
console.log(b);


// Spread
var a = [1,2,3,5];
var b = [...a];
console.log(a);
console.log(b);
b.pop();
b.pop();
console.log(a);
console.log(b);