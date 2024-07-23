function parent() {
    let parentname = "Liquat"; // Declares a variable `parentname`
    const childName = []; // Declares an empty array `childName`
    console.log("Parent Function"); // Logs "Parent Function"

    function child() { // Defines the nested `child` function
        childName.push("Omer"); // Adds "Omer" to the `childName` array
        console.log("Child Function"); // Logs "Child Function"
        console.log(parentname); // Logs the value of `parentname`
    }
    child();
    console.log(...childName); // Logs the contents of `childName` (currently empty)
    // child(); // Calls the `child` function to execute it
}

parent(); // Calls the `parent` function to execute it



// Example object creation
const obj = {
    name: "Abdullah",
    age: 25
  };
  
  // Log object in Node.js
  console.log(obj);
  
  // Log object in Chrome console
  console.dir(obj);
  