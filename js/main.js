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