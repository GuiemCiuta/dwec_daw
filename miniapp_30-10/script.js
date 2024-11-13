
function execPrompts() {
    const nombre = prompt("Cuál es tu nombre?");

    if (checkIfNombreExiste(nombre)) {
        alert("Ya existe este nombre");
        return;
    }

    const edad = prompt("Cuál es tu edad?");

    if (!nombre | !edad) {
        return;
    }

    crearCookie(generaClavePersonalizada("nombre", nombre), nombre);
    crearCookie(generaClavePersonalizada("edad", nombre), edad);
}

function generaClavePersonalizada(campo, nombre) {
    return `${campo}-${nombre}`;
}

function crearCookie(clave, valor) {
    document.cookie = `${clave}=${valor}`;
}


function checkIfNombreExiste(nombre) {
    console.log(document.cookie);
    return document.cookie.indexOf(`nombre-${nombre}=`) > -1;
}

execPrompts();
