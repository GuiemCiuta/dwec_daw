const articulos = document.getElementById("articulos");


function getArticulos() {
    const inici = Date.now();

    while(Date.now() - inici < 2000) {
        console.log("cargando...");   
    }

    return [
        {id: 1, nombre: "Caza F-16", precio: 340},
        {id: 2, nombre: "Caza F-18", precio: 380},
        {id: 1, nombre: "Caza Eurofigher", precio: 280},
        {id: 1, nombre: "Caza F-16", precio: 340},
        {id: 1, nombre: "Caza F-16", precio: 340},
    ]
}

function mostrarArticulos() {
    articulos.innerHTML = "<p>Cargando artículos...</p>";

    const articulosRecuperados = getArticulos();

    articulos.innerHTML = articulosRecuperados.map(articulo => `<p>${articulo.nombre} - ${articulo.precio}€</p>`).join("");
}

mostrarArticulos();