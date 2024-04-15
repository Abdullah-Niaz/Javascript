

const jsUser = {
  name: "ABC",
  "full Name":"ABC DEF ",
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
