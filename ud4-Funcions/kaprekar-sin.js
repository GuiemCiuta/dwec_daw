// Comprobar que todos los dígitos sean iguales
// Testear con números de 3 cifras

function mostrarProcedimientoKaprekar(numero) {
    const MAX_PASOS = 7;
    const KAPREKAR = 6174;

    if(!validarNumero(numero)) {
        console.log("El número no es válido");
        return;
    }

    let i;
    for (i = 0; i <= MAX_PASOS; i++) {
        if(numero === KAPREKAR) {
            break;
        }

        numero = calcularEImprimirPasoKaprekar(numero, i + 1);
    }

    if(i <= MAX_PASOS) {
        console.log(`Resuelto en ${i} pasos`);

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

mostrarProcedimientoKaprekar(888);