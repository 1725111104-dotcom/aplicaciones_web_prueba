// GoodCrew · Login
(function () {
    "use strict";

    const form      = document.getElementById("formLogin");
    const usuario   = document.getElementById("usuario");
    const password  = document.getElementById("password");
    const btnVer    = document.getElementById("verPassword");
    const btnEnviar = document.getElementById("botonIngresar");
    const mensaje   = document.getElementById("mensajeError");
    const logo      = document.querySelector(".logo");

    /* ---- Mostrar / ocultar contraseña (candado) ---- */
    btnVer.addEventListener("click", function () {
        const visible = password.type === "text";
        password.type = visible ? "password" : "text";
        btnVer.setAttribute("aria-pressed", String(!visible));
        btnVer.setAttribute("aria-label", visible ? "Mostrar contraseña" : "Ocultar contraseña");
        password.focus();
    });

    /* ---- Mensajes de error ---- */
    function mostrarError(texto, campo) {
        mensaje.textContent = texto;
        mensaje.classList.remove("visible");
        void mensaje.offsetWidth;            // reinicia la animación
        mensaje.classList.add("visible");
        if (campo) {
            campo.classList.add("invalido");
            campo.focus();
        }
    }

    function limpiarError() {
        mensaje.textContent = "";
        mensaje.classList.remove("visible");
        usuario.classList.remove("invalido");
        password.classList.remove("invalido");
    }

    [usuario, password].forEach(function (input) {
        input.addEventListener("input", limpiarError);
    });

    // Si el servidor ya puso un mensaje en el <p>, se muestra tal cual
    if (mensaje.textContent.trim() !== "") {
        mensaje.classList.add("visible");
    }

    /* ---- Validación antes de enviar ---- */
    form.addEventListener("submit", function (e) {
        limpiarError();

        if (usuario.value.trim() === "") {
            e.preventDefault();
            mostrarError("Escribe tu usuario para continuar.", usuario);
            return;
        }

        if (password.value === "") {
            e.preventDefault();
            mostrarError("Escribe tu contraseña para continuar.", password);
            return;
        }

        // Todo en orden: el formulario se envía por POST al servidor
        btnEnviar.classList.add("cargando");
        btnEnviar.setAttribute("aria-busy", "true");
    });

    /* ---- Si el logo no carga, se oculta sin romper el diseño ---- */
    if (logo) {
        logo.addEventListener("error", function () { logo.style.display = "none"; });
    }

    /* ---- Evita que el botón quede "cargando" al volver con la flecha atrás ---- */
    window.addEventListener("pageshow", function () {
        btnEnviar.classList.remove("cargando");
        btnEnviar.removeAttribute("aria-busy");
    });
})();