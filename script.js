function validateForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorContainer = document.getElementById('error-message');

    if (password === confirmPassword) {
        console.log(true);
        // You can also reset the error message if it was previously displayed
        errorContainer.textContent = '';
    } else {
        console.log(false);
        // Display an error message
        errorContainer.textContent = 'Incorrect password.';
    }
}
