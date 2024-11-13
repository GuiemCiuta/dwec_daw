let saludo = "hola";
// ó let saludo = String("hola");

// charCodeAt() --> Devuelve el código unicode de la posición especificada

// indexOf() --> Retorna el índice de la primera aparición de una cadena en otra cadena
// lastIndexOf() --> Retorna el índice de la última aparición de una cadena en otra cadena

// slice() --> Obtiene una porción de un string
// substring() --> Como slice pero sin admitir números negativos (es más antigua)

// Giliejercicio
let cadena = "Hola, cara de bola";
let mayus = cadena.toUpperCase();
console.log(mayus);
let minus = mayus.toLowerCase().slice(0, cadena.indexOf("cara")) + mayus.slice(cadena.indexOf("cara"),  cadena.indexOf("cara") + "cara".length) + mayus.toLowerCase().slice(cadena.indexOf(" de"));
console.log(minus);