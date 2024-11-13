const btnCrearCookie = document.getElementById("btn-crear-cookie");

btnCrearCookie.addEventListener("click", crearCookie);

function crearCookie() {
    document.cookie = "usuari=Guille";
}