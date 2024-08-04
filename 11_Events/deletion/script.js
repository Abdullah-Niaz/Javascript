// Select all elements with the class 'item-1'
const elements = document.querySelectorAll(".item-1");

// Iterate over the NodeList and add an event listener to each element
elements.forEach(element => {
    element.addEventListener('click', function(e) {
        // Log the element that was clicked
        console.log(element);
        console.log(element.className);
        console.log(element.getAttribute('class')); // Example usage of getAttribute
        
        // Check if the element has class 'item-2'
        if(element.classList.contains('item-2')) {
            element.textContent = "hello word";
            
        }    
        else if(element.classList.contains("item")){
                console.log("item class found");
                element.className.style.backgroundColor = "blue";
        } 
        else {
            element.remove();
        }
    });
});
