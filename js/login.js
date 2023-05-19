// login handaler
document.getElementById('submit-button').addEventListener('click', function () {
    // email field value
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // password field value
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'user@gmail.com' && userPassword == 'user') {
        window.location.href = 'bank.html';
    }
    else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'Your UserID invalid';
    }
    // email and password field reset
    emailField.value = '';
    passwordField.value = '';
})