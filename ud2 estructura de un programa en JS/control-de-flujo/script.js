/* let numero = Number(prompt("Escribe un número"));

if(!Number.isNaN(numero)) {
    console.log("Tu número es la raíz cuadrada de " + Math.pow(numero, 2));7

    let mensaje;

    if(numero < 10) mensaje = "Has escrito un número muy pequeño";
    else if (numero === 10) mensaje = "Enhorabuena! Has escrito el dorsal de Messi";
    else mensaje = "Has escrito un número grande.";
    
    console.log(mensaje);

} else {
    console.log("No has escrito un número...");
} */


/* let numero = 2;
let count = 0;
let suma = 0;
const NUM_IMPRESIONES = 100;

while (count < NUM_IMPRESIONES) {
    if (numero % 2 === 0) {
        console.log(numero);
        count++;
        suma += numero;
    }

    numero += 2;
}

console.log("SUMA", suma); */

/* 
let base = Number(prompt("Base: "));
let potencia = Number(prompt("Potencia: "));;

let acarreo = 1;

for(let i = 0; i < potencia; i ++) {
    acarreo *= base;
}

console.log(acarreo); */

const LIMITE = 100;

let acarreo = 0;

for(let i = 1; i <= LIMITE / 2; i ++) {
    const sum = i + (LIMITE + 1 - i);
    console.log(sum);
    acarreo += sum;
}

console.log(acarreo);