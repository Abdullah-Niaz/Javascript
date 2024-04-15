// let say you're asked to use the symbol as key

const mysym = Symbol("symbol");


const jsUser = {
    name: "ABC",
    "full Name": "ABC DEF ",
    // this key will act as a string and not a symbol
    mysym: "mykey1",
    // if you want to use the symbol as key then use the subcript method
    [mysym]: "mykey2",
    age: 20,
    location: "ABC",
    email: "abc@gmail.com",
    isLoggedIn: true,
};

console.log(jsUser.age);
console.log(jsUser.location);
console.log(jsUser.email);
console.log(jsUser.isLoggedIn);
// if key is not valid identifier then use the subcript method
console.log(jsUser["full Name"])

// accessing the symbol
// this key will act as a string and not a symbol
// mysym: "mykey1",
console.log(jsUser.mysym);
console.log(typeof jsUser.mysym);


// if you want to use the symbol as key then use the subcript method
// [mysym]: "mykey2",
console.log(jsUser[mysym]);
console.log(typeof jsUser[mysym]);


// if you want to modifty the objects
jsUser.age = 25;
jsUser.email = "cdegfgdf@gmail.com";
jsUser.name = "cdfdf";
jsUser["full Name"] = "abddferere afsdf",
jsUser.isLoggedIn = true;
console.log(jsUser.age);
console.log(jsUser.location);
console.log(jsUser.email);
console.log(jsUser.isLoggedIn);

// if key is not valid identifier then use the subcript method
console.log(jsUser["full Name"])

// if you want to freeze the change 
// Object.freeze(jsUser);

jsUser.age = 25;
jsUser.email = "omer@gmail.com";
jsUser.name = "cdfdf";
jsUser["full Name"] = "abddferere afsdf";
jsUser.isLoggedIn = true;
console.log(jsUser.age);
console.log(jsUser.location);
console.log(jsUser.email);
console.log(jsUser.isLoggedIn);

// if key is not valid identifier then use the subcript method
console.log(jsUser["full Name"])

console.log(jsUser);


// writing fucntion inside the object 
jsUser.greeting1 = function(){
    console.log(` hello js user1 ${this.name}`);
}
jsUser.greeting2 = function(){
    console.log(`hello js user 1 ${this.name}`);
}

console.log(jsUser.greeting1());
console.log(jsUser.greeting2());


