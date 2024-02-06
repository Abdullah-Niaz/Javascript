let x = 20;
let y = x;
y = 30;
console.log(x,y);




let userOne = {
    userName : "Omer",
    email : "omer@gmail.com"
};

let userTwo = userOne;
userTwo.email = "Omerali@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);