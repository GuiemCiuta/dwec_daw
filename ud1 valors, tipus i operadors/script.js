//NÚMEROS

// JS admite 64 bits para un número
// Los negativos reservan un bit para representar el símbolo negativo

let a = 10;
let b = 9.34;
let c = 3.452e6; // Para notación científica. El equivalente sería 3452000
const PI = 3.141592;

// Operadores binarios
// + y *
console.log(a * b - c / PI);

// NÚMEROS ESPECIALES
// Infinity y -Infinity
// NaN

console.log(Infinity * -1);

console.log(a / 0 === Infinity);

// Operadores unarios
// Usan un solo valor
// typeof

// Operadores con dos comportamientos
// - es unario y binario


// VALORS BUITS
// null, undefined

// CONVERSIÓN AUTOMÁTICA DE TIPOS
8 * null // 0
8 * undefined // NaN
"5" + 1 // 51
1 + "5" // 51
"5" - 1 // 4
null == undefined // true
null == 0 // false


// CORTOCIRCUITO DE LOS OPERADORES && Y ||
null || "guiem" // "guiem"
"pepe" || "joan" // "pepe"
0 || 100 // 100
0 && 100 // 0