function validarFormulario() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let valid = true;

    // Validación de campo de usuario
    if (username === "") {
        mostrarError("usernameError", "El usuario es obligatorio.");
        valid = false;
    } else {
        ocultarError("usernameError");
    }

    // Validación de campo de contraseña
    if (password === "") {
        mostrarError("passwordError", "La contraseña es obligatoria.");
        valid = false;
    } else {
        ocultarError("passwordError");
    }

    return valid;
}

function mostrarError(id, mensaje) {
    let errorElement = document.getElementById(id);
    errorElement.innerText = mensaje;
    errorElement.style.display = "block";
}

function ocultarError(id) {
    let errorElement = document.getElementById(id);
    errorElement.style.display = "none";
}
