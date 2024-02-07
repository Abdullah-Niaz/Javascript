function fizbuzz(input){
    if(typeof input !== "number"){
        return "Not a Number";
    }
    if ((input % 3===0)  && (input % 5===0)) {
        return "fizbuzz";
    }
    else if(input % 3===0){
        return "Fiz";
    }
    else if(input % 5===0){
        return "Buz"
    }
    else{
        return input;
    }
}

let r = fizbuzz(false);
console.log(r);