// Escribe una función que deveuelva el mínimo de 3 números

function obtenerMin(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}


// Función recursiva que mira si un número es par o no
function esPar(numero) {
    if(numero != Math.round(numero)) {
        numero = Math.round(numero);
    }

    if (numero === 1) {
        return false;
    }

    if (numero === 0) {
        return true;
    }

    if (numero < 0) {
        return esPar(-numero);
    }

    return esPar(numero - 2);
}

console.log(`50 ${esPar(50)}`);
console.log(`75 ${esPar(75)}`);
console.log(`-75 ${esPar(-75.1)}`);