const cars = ["Car1","Car2","Car3"];
cars[0] = "Car1_Changed";
cars.push("Car4");
console.log(cars);


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

console.table(car);

const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10

console.log(x);