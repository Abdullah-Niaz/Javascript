// arrow fucntion syntax 
// () => {
//     console.log("hello world");
// }


const addTwo = (n1,n2) =>{
    return n1 + n2;
}

const resultAddTwo = addTwo(1,2);
console.log(resultAddTwo);


// implicit return 
const addTwoImplicit = (n1,n2) => n1 + n2;
console.log(addTwoImplicit(2,2));