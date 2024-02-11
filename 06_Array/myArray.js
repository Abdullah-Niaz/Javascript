const arr = [1,2,3,4,5,6,7];
console.log(arr);

arr.push(8);
arr.push(31);
arr.pop();

arr.unshift(12);
console.log(arr);
arr.shift(); 
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(9))


// Returns the String
const newarr = arr.join();

console.log(arr);
console.log(newarr);

const newar = new Array(1,2,3,4,5);
console.log(newar);

const new1 = newar.slice(1,3);
console.log(new1);

const new2 = newar.splice(1,3);
console.log(new2);
console.log(newar);