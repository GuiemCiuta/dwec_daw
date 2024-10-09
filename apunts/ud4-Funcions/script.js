/* const redondeaA = function(n, m) {
    return m * Math.round(n / m);
}

console.log(redondeaA(14, 4)); */

/* let repeat = true;
const humus = function (factor) {
    const ingrediente = function (cantidad, unidad, nombre) {
        let cantidadIngrediente = cantidad * factor;

        if (cantidadIngrediente !== 1) {
            unidad += "s";
        }

        console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
    };

    ingrediente(1, "lata", "garbanzos");
    ingrediente(0.1, "lata", "garbanzos");
    ingrediente(4, "lata", "garbanzos");
};

humus(2); */
/* 
function exponencial(base, exponente) {
    if(exponente === 0) {
        return 1;
    }

    return base * exponencial(base, exponente - 1);
}

console.log(exponencial(2, 3)); */

/* function factorial(n) {
    if(n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(3)); */

function imprimirInventarioGranja(vacas, pollos, cerdos) {
    console.log(`${rellenarNumConCeros(vacas, 5)} Vacas`);
    console.log(`${rellenarNumConCeros(pollos, 5)} Pollos`);
    console.log(`${rellenarNumConCeros(cerdos, 5)} Cerdos`);
}

function rellenarNumConCeros(numero, longitud) {
    let cadenaNumero = String(numero);

    while(cadenaNumero.length < longitud) {
        cadenaNumero = "0" + cadenaNumero;
    }

    return cadenaNumero;
}


imprimirInventarioGranja(10, 3);