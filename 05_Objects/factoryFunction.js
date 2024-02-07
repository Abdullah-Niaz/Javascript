// function createCircle(radius){
//     return {
//         radius,
//         draw(){
//             console.log("Draw.....");
//         }
//     }
// }
// const circle1 = createCircle(4);
// console.log(circle1);

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

let omer = person;
omer.firstName = "Omer";
omer.lastName = "Liquat";
omer.id = 5555;
console.log(omer);