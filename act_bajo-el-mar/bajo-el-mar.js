const imagenSonda = "~~~><>~~~><>><>~~~><>~~~~~~><>~><>~";

let recuento = 0;
function contarPeces(cadena) {
    const iconoPez = "><>";

    const primerPezPos = cadena.indexOf(iconoPez);

    if (primerPezPos < 0) {
        return 0;
    }

    if (cadena.slice(primerPezPos, primerPezPos + iconoPez.length) === iconoPez) {
        recuento ++;
        return contarPeces(cadena.slice(primerPezPos + iconoPez.length));
    }

}

contarPeces(imagenSonda);

console.log(recuento);