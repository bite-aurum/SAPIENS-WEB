function mostrarMensaje(texto, correcto) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.className = correcto ? "mensaje ok" : "mensaje error";
}
const formLogin = document.getElementById("login");

if (formLogin) {
  formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value;

    if (usuario === "" || password === "") {
      mostrarMensaje("Llena todos los campos", false);
    } else {
      mostrarMensaje("Datos correctos", true);
    }
  });
}

/*preguntas frecuentes*/ 
const preguntas = document.querySelectorAll("details");
 
preguntas.forEach(function (pregunta) {
  pregunta.addEventListener("toggle", function () {
    if (pregunta.open) {
      preguntas.forEach(function (otra) {
        if (otra !== pregunta) otra.open = false;
      });
    }
  });
});

const formRegistro = document.getElementById("form-registro");

if (formRegistro) {
  formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const pass = document.getElementById("pass").value;
    const pass2 = document.getElementById("pass2").value;

    if (nombre === "" || correo === "" || pass === "" || pass2 === "") {
      mostrarMensaje("Llena todos los campos", false);
    } else if (pass !== pass2) {
      mostrarMensaje("Las contraseñas no coinciden", false);
    } else {
      mostrarMensaje("Registro exitoso", true);
    }
  });
}
