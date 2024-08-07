// const User = {
//     username:"Abdullah",
//     age: 25,
//     isLoggedIn:true,
//     address:{
//         street:"123 Main St",
//         city:"Anytown"
//     }
// }

// console.log(User.address);

function User(username,email,password){
    this.username  = username
    this.email = email;
    this.password  = password;
    return this;
}

const UserOne =new  User("Omer","Omerali@gmail.com",123232)
const UserTwo =new User("Hamza","Hamza@gmail.com",12324534)
console.log(UserOne)