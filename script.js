const formTitle = document.getElementById('form-title');
const confirmPasswordField = document.getElementById('confirm-password-field');
const toggleLink = document.getElementById('toggle-link');
const toggleText = document.getElementById('toggle-text');
let isLogin = true;

// Toggle between Login and Signup
toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isLogin = !isLogin;
    
    if (isLogin) {
        formTitle.textContent = 'Login';
        toggleText.textContent = "Don't have an account?";
        toggleLink.textContent = 'Sign up';
        confirmPasswordField.classList.add('hidden');
    } else {
        formTitle.textContent = 'Sign up';
        toggleText.textContent = 'Already have an account?';
        toggleLink.textContent = 'Login';
        confirmPasswordField.classList.remove('hidden');
    }
});
