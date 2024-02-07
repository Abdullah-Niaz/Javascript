function max(a,b){
    if( a > b){
        return a;
    }
    else{
        return b;
    }
}
let max_ = max(12,3);
console.log("Max of Two: ", max_);


let a = 42,b = 10;
let result = (a > b) ? a : b;
console.log("Now the Max: ", result);