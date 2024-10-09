const imagenSonda = "~~~><>~~~><>><>~~~><>~~~~~~><>~><>~";

// Iniciamos el recuento en 0
let recuento = 0;

function contarPeces(cadena) {
    const iconoPez = "><>"; // Los peces están identificados así

    const primerPezPos = cadena.indexOf(iconoPez);

    // Si no se encuentra ningún pez, retornar 0
    if (primerPezPos < 0) {
        return 0;
    }

    // Si llegamos hasta aquí, significa que se ha encontrado otro pez
    recuento++;
    // Devolvemos la cadena pero recortando los caracteres que conforman el pez actual
    return contarPeces(cadena.slice(primerPezPos + iconoPez.length));



}

contarPeces(imagenSonda);

console.log(recuento);