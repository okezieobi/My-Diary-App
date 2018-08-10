// Get the modal
const modal = document.getElementById('id01');
const modal2 = document.getElementById('id02');
const register = document.getElementById('register');
const login = document.getElementById('login');
const loginForm = document.getElementById('loginForm');
const cancelLogin = document.getElementById('cancelLogin');
const registerForm = document.getElementById('registerForm');
const cancelRegister = document.getElementById('cancelRegister');

cancelRegister.onclick = () => {
    modal2.style.display = "none";

}

registerForm.onclick = () => {
    modal2.style.display = "block";

}

cancelLogin.onclick = () => {
    modal.style.display = "none";
}

loginForm.onclick = () => {
    modal.style.display = "block";

}

register.onclick = () => {
    window.location.href = "../dashboard/dashboard.html";
}

login.onclick = () => {
    window.location.href = "../dashboard/dashboard.html";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    'use strict';
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (event.target === modal2) {
        modal2.style.display = "none";
    }
};
