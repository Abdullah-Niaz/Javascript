function car(name,model,price,color){
    this.name=name;
    this.model=model;
    this.price = price;
    this.color = color;
    this.greeting = ()=>{
        console.log(`Hello, Car Name is ${this.name} Model: ${this.model} Price: ${this.price} Color: ${this.color}`)
    };
}
const Auto = new car("Audi","101DE123",1232132312,"Black")
console.log(Auto instanceof car)