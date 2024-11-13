const title = document.getElementById("title");
const displayTime = document.getElementById("display-time");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonRestart = document.getElementById("restart");

let cronoInterval;

let cronoDate = new Date();
cronoDate.setHours(0, 0, 10, 0);

function resetTitle() {
    title.innerHTML = "Cuentra atrás";
}

resetTitle();

function checkDateLimit() {
    if (cronoDate.getHours() == 0 && cronoDate.getMinutes() == 0 && cronoDate.getSeconds() == 0) {
        title.innerHTML = "¡Tiempo finalizado!";
        clearInterval(cronoInterval);
        buttonRestart.disabled = false;
        buttonStart.disabled = true;
        buttonStop.disabled = true;
    }
}

function initCrono() {
    cronoDate.setHours(0, 0, 10, 0);
    renderCrono(cronoDate);
}

function renderCrono() {
    displayTime.innerHTML =
        `${rellenarNumConCeros(cronoDate.getHours(), 2)}:${rellenarNumConCeros(cronoDate.getMinutes(), 2)}:${rellenarNumConCeros(cronoDate.getSeconds(), 2)}`;
}

function updateTime() {
    cronoDate.setSeconds(cronoDate.getSeconds() - 1);
    checkDateLimit();
}

function execCrono() {
    updateTime();
    renderCrono(cronoDate);
}

function clearCrono() {
    clearInterval(cronoInterval);
}

window.onload = function () {
    initCrono();
}

buttonStart.onclick = function () {
    clearCrono();
    cronoInterval = setInterval(execCrono, 1000);
    this.disabled = true;
    buttonRestart.disabled = true;
    buttonStop.disabled = false;
}

buttonStop.onclick = function () {
    clearCrono();
    this.disabled = true;
    buttonRestart.disabled = false;
    buttonStop.disabled = true;
}

buttonRestart.onclick = function () {
    clearCrono();
    initCrono();
    resetTitle();
    this.disabled = true;
    buttonStart.disabled = false;
    buttonStop.disabled = true;
}