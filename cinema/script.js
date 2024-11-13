const contenedor = document.querySelector(".contenedor");
const asientos = document.querySelectorAll(".fila .asiento:not(.ocupado)");
const contador = document.getElementById("contador");
const precio = document.getElementById("precio");
const peliculaSelect = document.getElementById("pelicula");

function actualizarContador(recuentoAsientos) {
    console.log(recuentoAsientos);

    contador.innerText = recuentoAsientos;
    precio.innerText = recuentoAsientos * +peliculaSelect.value;
}

loadData();

function loadData() {
    const asientosSeleccionados = JSON.parse(localStorage.getItem("indice-asientos-seleccionados"));

    if(asientosSeleccionados !== null && asientosSeleccionados.length) {
        asientos.forEach((asiento, index) => {
            if(asientosSeleccionados.indexOf(index) > -1) {
                asiento.classList.add("seleccionado");
            }
        }) 
    }

    const indicePeliculaSeleccionada = localStorage.getItem("indice-pelicula-seleccionada");

    if(indicePeliculaSeleccionada) {
        peliculaSelect.selectedIndex = indicePeliculaSeleccionada;
    }

    actualizarAsientos();
}

function actualizarAsientos() {
    const asientosSeleccionados = document.querySelectorAll(".fila .asiento.seleccionado");

    const indiceAsientosSeleccionados = [...asientosSeleccionados].map(function (asiento) {
        return [...asientos].indexOf(asiento);
    });


    actualizarContador(indiceAsientosSeleccionados.length);
    localStorage.setItem("indice-asientos-seleccionados", JSON.stringify(indiceAsientosSeleccionados));
}

contenedor.addEventListener("click", function (e) {
    if (e.target.classList.contains("asiento") && !e.target.classList.contains("ocupadoo")) {
        e.target.classList.toggle("seleccionado");
        actualizarAsientos();
    }
});

peliculaSelect.addEventListener("change", function () {
    actualizarAsientos();
    localStorage.setItem("indice-pelicula-seleccionada", peliculaSelect.selectedIndex);
});