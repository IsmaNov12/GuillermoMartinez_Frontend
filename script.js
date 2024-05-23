const emailInput = document.getElementById('email');
const loginButton = document.getElementById('login-button');

emailInput.addEventListener('input', function() {
    loginButton.disabled = !emailInput.value.trim();
});