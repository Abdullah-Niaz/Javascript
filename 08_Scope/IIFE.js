// Imediately Invoked Function Expression 

// We use IIFE in order to avoid the global scope polluation code(variable etc)
(function () {
    console.log('DB Connected');
})();

//  named iife
(function () {
    console.log("DB Connected, it's named iife");
})();

// arrow function
(() => {
    console.log('DB Connected 2');
})();

// unnamed iffee
(() => {
    console.log("DB Connected 2,it's unnamed iife");
})();

// paraemter iife
((name) => {
    console.log(`DB Connected 2 ${name} it's parameterized iife`);
})("omer");