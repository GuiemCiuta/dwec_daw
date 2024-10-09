const button = document.getElementById("button");

let count = 0;

function saluda() {
    console.log("Hola");
}

// Aquí, la función va sin paréntesis
button.addEventListener("click", function() {
    count ++;

    if(count >= 5) {
        console.log("La suma es:", suma(Math.pow(count, 2), 5));
    }
});