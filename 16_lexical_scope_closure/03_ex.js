function setupClickListener(buttonId, message) {
    document.getElementById(buttonId).addEventListener('click', function() {
        alert(message);
    });
}

// Set up the click listener for the button with ID 'idu'
setupClickListener("idu", "Button was clicked!"); 
