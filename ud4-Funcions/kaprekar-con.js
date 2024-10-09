// Comprobar que todos los dígitos sean iguales
// Testear con números de 3 cifras
const MAX_PASOS = 7;
const KAPREKAR = 6174;

function mostrarProcedimientoKaprekar(numero, i) {
    if (numero === KAPREKAR || i === MAX_PASOS) {
        return i;
    }

    if (!validarNumero(numero)) {
        console.log("El número no es válido");
        return;
    }

    numero = calcularEImprimirPasoKaprekar(numero, i + 1);
    return mostrarProcedimientoKaprekar(numero, i + 1);
}

function exec(num) {
    const numPasos = mostrarProcedimientoKaprekar(num, 0);

    if (numPasos <= MAX_PASOS) {
        console.log(`Resuelto en ${numPasos} pasos`);

    } else {
        console.log("Ha habido un error.");
    }
}

function validarNumero(numero) {
    return ordenarCifras(numero, true) !== ordenarCifras(numero, false) && numero > 0;
}

function calcularEImprimirPasoKaprekar(numero, paso) {
    const numGrande = ordenarCifras(numero, true);
    const numPequeno = ordenarCifras(numero, false);
    const resta = numGrande - numPequeno

    console.log(`${paso} Paso: ${numGrande} - ${numPequeno} = ${resta}`);

    return resta;
}

function ordenarCifras(numero, mayorMenor = true) {
    let cifras = rellenarNumConCeros(numero, 4).split("").sort();

    if (mayorMenor) {
        cifras = cifras.reverse();
    }


    return Number(cifras.join(""));
}

function rellenarNumConCeros(numero, longitud) {
    let cadenaNumero = String(numero);

    while (cadenaNumero.length < longitud) {
        cadenaNumero = "0" + cadenaNumero;
    }

    return cadenaNumero;
}

exec(888);