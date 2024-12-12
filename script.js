// JavaScript Code

document.addEventListener("DOMContentLoaded", function () {
    // Select the Sign in button
    const signInButton = document.querySelector(".inputBx input[type='submit']");

    // Add click event listener to the button
    signInButton.addEventListener("click", function (event) {
        // Prevent form submission to avoid page reload
        event.preventDefault();

        // Get the username and password fields
        const username = document.querySelector(".inputBx input[placeholder='Username']").value;
        const password = document.querySelector(".inputBx input[placeholder='Password']").value;

        // Check if both fields are filled
        if (username && password) {
            // Show a success message
            alert("You have successfully logged in!");
        } else {
            // Show an error message
            alert("Please fill in both fields before signing in.");
        }
    });
});
