const enlaces = document.getElementsByTagName("a");
const enlace = enlaces[2];
const contenedor = document.getElementById("contenedor");
const nuevoEnlace = document.createElement("a");

function contadorSelector(selector) {
    return document.querySelectorAll(selector).length;
}

nuevoEnlace.href = "https://menorca.info";
nuevoEnlace.innerHTML = "Menorca"

contenedor.insertBefore(enlace, enlaces[0]);

contenedor.appendChild(nuevoEnlace);

console.log(enlace);

