let factura = {
    descripcion: "Factura 01",
    importe: 100.20,
    iva: 21.00,

    getSubtotal: function () {
        return this.importe;
    },

    getTotal: () => {
        return this.importe * this.iva;
    }
};

//console.log(factura.getTotal());


// Constructores
function Web(url, nombre) {
    this.url = url;
    this.nombre = nombre;

    this.mostrarInfo = function () {
        return this.nombre + " " + this.url;
    } // Aquí sí es lo mismo que una función flecha

    this.hacerWebSegura = () => this.url = "https://guiem.dev";
};

Web.prototype.visitas = 10;
Web.prototype.diHola = function () {
    return "Hola";
}

let miWeb = new Web("localhost", "hola");

console.log(miWeb.visitas);
console.log(miWeb.diHola());

miWeb.hacerWebSegura();

console.log(miWeb);


// STAR WARS: personajes y edades
/*
    Eres un joven padawan que colecciona datos sobre los héroes de Star Wars.
    Se te proporcionan dos arrays: uno con los nombres de algunos de estos héroes
    y otro con sus edades (en el episodio IV), con la indexación correspondiente
    a su nombre en el otro array.
*/

const nombres = ["Luke", "Oby-Wan", "Yoda", "Leia"];
const edades = [19, 57, 900, 19];

let nombresYEdadesCombinados = {};
let sumaEdades = 0;

for(let i = 0; i < nombres.length; i ++) {
    nombresYEdadesCombinados[nombres[i]] = edades[i];
    sumaEdades += edades[i];
}

console.log(nombresYEdadesCombinados);
console.log("Suma edades:", sumaEdades);