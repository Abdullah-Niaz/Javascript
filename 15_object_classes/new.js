function ChaiBnao(username,price){
    this.username =username;
    this.price = price;
}

ChaiBnao.prototype.increment = function(){
    this.price++;
}
ChaiBnao.prototype.printMe = function(){
    console.log(`Name: ${this.username}  Price: ${this.price}`);    
}

const simpleChai = new  ChaiBnao("chai",20);
const greenTea = new ChaiBnao("Green Tea",50);


console.log(simpleChai.printMe());
console.log(greenTea.printMe());

console.log(simpleChai)