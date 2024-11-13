// Objeto Date
const displayHora = document.getElementById("display-hora");


function checkIfPM(horas) {
    return horas >= 12;
}

function convertirHoras(horas) {
    return horas - 12;
}

function construirHoraStr(horas, minutos, segundos) {
    let sufix = "AM";
    
    if(checkIfPM(horas)) {
        horas = convertirHoras(horas);
        sufix = "PM";
    }
    
    return `${rellenarNumConCeros(horas, 2)}:${rellenarNumConCeros(minutos, 2)}:${rellenarNumConCeros(segundos, 2)} ${sufix}`;
}

function execCrono() {
    let fecha = new Date();
    displayHora.innerHTML = construirHoraStr(fecha.getHours(), fecha.getMinutes(), fecha.getSeconds());
}

let cronoInterval;
window.addEventListener("DOMContentLoaded", function() {
    cronoInterval = setInterval(execCrono, 1000);
});