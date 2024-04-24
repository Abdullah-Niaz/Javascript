const mysym = Symbol("symbol");

const arr ={
    name: "Talha",
    "Full Name":"Talha Azhar",
    age : 20,
    mysym : "STring",
    [mysym] : "newMySymb",
    address: "lahore",
    isLoggedIn :true,
}

console.log(arr["Full Name"]);
console.log(arr.name,arr.age,arr.address,arr.isLoggedIn)
console.table(arr)
// this key will act as a string and not a symbol
mysym: "mykey1",
console.log(arr.mysym);
console.log(typeof arr.mysym); 


// if you want to use the symbol as key then use the subcript method
// [mysym]: "mykey2",
console.log(arr[mysym]);
console.log(typeof arr[mysym]);

Object.freeze(arr); // so that it  cant be modified further 