function altaUsuariosPage() {
    console.log("AltaUsuarios Page Loaded");
}

// ../logic/alta-usuario.js

//Variables principales
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-alta-usuario");
  const btnVolver = document.getElementById("btn-volver");
  const btnCancelar = document.getElementById("btn-cancelar");
  const passwordInput = document.getElementById("contrasena");
  const confirmPasswordInput = document.getElementById("confirmar-contrasena");
  const passwordStrengthBar = document.getElementById("password-strength-bar");
  const passwordStrengthText = document.getElementById("password-strength-text");


// --- Función para evaluar fuerza de contraseña ---
  const evaluarContrasena = (password) => {
    let fuerza = 0;
    if (password.length >= 8) fuerza += 1;
    if (/[A-Z]/.test(password)) fuerza += 1;
    if (/[a-z]/.test(password)) fuerza += 1;
    if (/\d/.test(password)) fuerza += 1;
    if (/[^A-Za-z0-9]/.test(password)) fuerza += 1;
    return fuerza;
  };

  const actualizarBarraContrasena = (password) => {
    const fuerza = evaluarContrasena(password);
    const porcentaje = (fuerza / 5) * 100;
    let color = "danger";
    let texto = "Débil";

    if (fuerza >= 4) {
      color = "success";
      texto = "Fuerte";
    } else if (fuerza === 3) {
      color = "warning";
      texto = "Media";
    }

    passwordStrengthBar.className = `progress-bar bg-${color}`;
    passwordStrengthBar.style.width = `${porcentaje}%`;
    passwordStrengthText.textContent = password ? `Seguridad: ${texto}` : "";
  };

  passwordInput.addEventListener("input", (e) => {
    actualizarBarraContrasena(e.target.value);
  });

// --- Validación personalizada de contraseñas ---
const validarCoincidenciaContrasenas = () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordInput.setCustomValidity("Las contraseñas no coinciden");
    } else {
      confirmPasswordInput.setCustomValidity("");
    }
  };

  confirmPasswordInput.addEventListener("input", validarCoincidenciaContrasenas);
  passwordInput.addEventListener("input", validarCoincidenciaContrasenas);

// --- Botón volver ---
  btnVolver.addEventListener("click", () => {
    window.history.back();
  });

  // --- Botón cancelar ---
  btnCancelar.addEventListener("click", () => {
    const confirmar = confirm("¿Desea cancelar el registro y limpiar el formulario?");
    if (confirmar) {
      form.reset();
      passwordStrengthBar.style.width = "0%";
      passwordStrengthText.textContent = "";
    }
  });




  
  });
// altaUsuariosPage()