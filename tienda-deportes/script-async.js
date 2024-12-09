const domArticulos = document.getElementById("articulos");
const domArticuloAdd = document.getElementById("articulo-add");
const domNombre = document.getElementById("nombre");
const domPrecio = document.getElementById("precio");

function getArticulos() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                [{
                        id: 1,
                        nombre: "Caza F-16",
                        precio: 340
                    },
                    {
                        id: 2,
                        nombre: "Caza F-18",
                        precio: 380
                    },
                    {
                        id: 1,
                        nombre: "Caza Eurofigher",
                        precio: 280
                    },
                    {
                        id: 1,
                        nombre: "Caza F-16",
                        precio: 340
                    },
                    {
                        id: 1,
                        nombre: "Caza F-16",
                        precio: 340
                    },
                ]
            );
        }, 2000);
    });
}

async function mostrarArticulos() {
    articulos.innerHTML = "<p>Cargando artículos...</p>";

    const articulosRecuperados = await getArticulos();

    articulos.innerHTML = articulosRecuperados.map(articulo => `<p>${articulo.nombre} - ${articulo.precio}€</p>`).join("");
}

domArticuloAdd.addEventListener("submit", async function(e) {
    e.preventDefault();

    const nombre = domNombre.value;
    const precio = domPrecio.value;

    await new Promise(resolve => setTimeout(resolve, 1000));

    domArticuloAdd.reset();

    alert(`Artículo añadido: ${nombre} con el precio ${precio}`);

    mostrarArticulos();
})

mostrarArticulos();