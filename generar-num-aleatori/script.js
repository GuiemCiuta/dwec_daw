const contenedor = document.getElementById("contenedor");
const feedbackFinal = document.getElementById("feedback-final");

let numMin = 1;
let numMax = 100;
let intentos = 5;
let puedeJugar = true;

function generaNumAleatorio(minIncl, maxIncl) {
    return Math.round(minIncl + Math.random() * (maxIncl - minIncl));
}

const NUMERO_A_ADIVINAR = generaNumAleatorio(numMin, numMax);


function generaBotones(primerNum, ultimoNum, contenedor) {
    limpiarContenedor(contenedor);

    for (let i = primerNum; i <= ultimoNum; i++) {
        contenedor.innerHTML += `<button onClick="comprobarNum(${i})">${i}</button>`;
    }
}

function limpiarContenedor(contenedor) {
    contenedor.innerHTML = "";
}

function comprobarSiPuedeSeguirJugando() {
    if (intentos === 0) {
        return;
    }
}

function actualizarContador() {
    intentos--;

    document.getElementById("contador-vidas").innerHTML = intentos;
}

function comprobarSiPuedeSeguirJugando() {
    if (intentos === 0) {
        return true;
    }
}

function comprobarNum(numUsuario) {
    if (!puedeJugar) {
        return;
    }

    if (numUsuario === NUMERO_A_ADIVINAR) {
        feedbackFinal.innerHTML = "Has ganado!";
        puedeJugar = false;
        return;
    }

    actualizarContador();

    if (comprobarSiPuedeSeguirJugando()) {
        feedbackFinal.innerHTML = "Has perdido... El número era " + NUMERO_A_ADIVINAR;
        puedeJugar = false;
        return;
    }


    let numFrom, numTo;
    if (numUsuario > NUMERO_A_ADIVINAR) {
        numFrom = numMin;
        numTo = numUsuario - 1;
        numMax = numUsuario - 1;

    } else {
        numFrom = numUsuario + 1;
        numTo = numMax;
        numMin = numUsuario + 1;
    }

    console.log(numFrom, numTo);
    generaBotones(numFrom, numTo, contenedor);
}

generaBotones(numMin, numMax, contenedor);