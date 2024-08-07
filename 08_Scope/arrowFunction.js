// arrow fucntion syntax 
// () => {
//     console.log("hello world");
// }



// explicit return 
const addTwo = (n1,n2) =>{
    return n1 + n2;
}

const resultAddTwo = addTwo(1,2);
console.log(resultAddTwo);


// implicit return 
const addTwoImplicit = (n1,n2) => n1 + n2;
console.log(addTwoImplicit(2,2));

// return the object in implicit return 
const addTwoImplicitObj = (n1,n2) => ({sum: n1 + n2});
console.log(addTwoImplicitObj(2,2));