const displayTime = document.getElementById("display-time");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonRestart = document.getElementById("restart");

let cronoInterval;

let cronoDate = new Date();
cronoDate.setHours(0, 0, 0);

function initCrono() {
    cronoDate.setHours(0, 0, 0);
    renderCrono(cronoDate);
}

function renderCrono() {
    displayTime.innerHTML =
        `${rellenarNumConCeros(cronoDate.getHours(), 2)}:${rellenarNumConCeros(cronoDate.getMinutes(), 2)}:${rellenarNumConCeros(cronoDate.getSeconds(), 2)}`;
}

function updateTime() {
    cronoDate.setSeconds(cronoDate.getSeconds() + 1);
}

function execCrono() {
    updateTime();
    renderCrono(cronoDate);
}

function clearCrono()  {
    clearInterval(cronoInterval);
}

window.onload = function () {
    initCrono();
}

buttonStart.onclick = function () {
    clearCrono();
    cronoInterval = setInterval(execCrono, 1000);
}

buttonStop.onclick = function () {
    clearCrono();
}

buttonRestart.onclick = function() {
    clearCrono();
    initCrono();
}