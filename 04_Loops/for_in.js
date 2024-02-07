// use to itterate over the properties and attributes of object 

const person = {
    name: "Omer",
    age : 20
};
for(let x in person){
    console.log(x,person[x]);
}

const colors = ['red','green','blue'];
for(let x in colors){
    console.log(x,colors[x]);
}



const cars = {
    name: "Fortuner",
    engineNo : 12323,
    color : "Black"
};

for(let r in cars){
    console.log(r,cars[r]);
}