function loginPage() {
    console.log("Login Page Loaded");

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    [emailInput, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                input.classList.remove('is-invalid');
                input.nextElementSibling.textContent = '';
            }
        });
    });


    loginForm.addEventListener('submit', function(event) {
        let valid = true;  

        emailInput.classList.remove('is-invalid');
        passwordInput.classList.remove('is-invalid');

        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            showError(emailInput, "El correo es obligatorio.");
            valid = false;
        } else if (!validateEmail(emailValue)) {
            showError(emailInput, "Por favor ingresa un correo válido.");
            valid = false;
        }

        const passwordValue = passwordInput.value.trim();
        if (!passwordValue) {
            showError(passwordInput, "La contraseña es obligatoria.");
            valid = false;
        } else if (passwordValue.length < 6) {
            showError(passwordInput, "La contraseña debe tener al menos 6 caracteres.");
            valid = false;
        }

  
        if (!valid) {
            event.preventDefault();
        } else {
            console.log("Formulario válido. Se enviará y la página se recargará.");
        }
    });
}

function showError(input, message) {
    input.classList.add('is-invalid');
    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
    }
}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

loginPage();
