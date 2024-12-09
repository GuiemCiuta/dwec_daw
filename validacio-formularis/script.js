const domForm = document.getElementById("form");
const domNomUsuari = document.getElementById("nom-usuari");
const domEmail = document.getElementById("email");
const domEdat = document.getElementById("edat");
const domNivellAngles = document.getElementById("nivell-angles");
const domPassword = document.getElementById("password");
const domPassowrdConfirm = document.getElementById("password-confirm");
const domAcceptaCondicions = document.getElementById("accepta-condicions");

function mostraError(input, text) {
    const formControl = input.parentElement;
    formControl.classList.add("error");
    formControl.classList.remove("correcte");
    formControl.querySelector("small").innerText = text;
}

function mostraCorrecte(input) {
    const formControl = input.parentElement;
    formControl.classList.add("correcte");
    formControl.classList.remove("error");
    formControl.querySelector("small").innerText = "";
}

function validarEmail(email) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexEmail.test(String(email).toLowerCase());
}

function validarNivellAngles(nivellAngles) {
    return nivellAngles !== "placeholder";
}

function validarComprovaContrasenya() {
    return domPassword.value === domPassowrdConfirm.value;
}

function validarCondicions() {
    return domAcceptaCondicions.checked;
}

function esObligatori(input, missatgeError) {
    if (input.value === '') {
        mostraError(input, missatgeError);
    } else {
        mostraCorrecte(input);
    }
}

// Comprova si el camp és obligatori (i està emplenat), i una condició addicional
function validacioPersonalitzada(input, missatgeError, condicio, missatgeErrorCondicio) {
    if (input.value === '') {
        mostraError(input, missatgeError);
    } else if (condicio) {
        mostraError(input, missatgeErrorCondicio);
    } else {
        mostraCorrecte(input);
    }
}

domForm.addEventListener("submit", function (e) {
    e.preventDefault();

    esObligatori(domNomUsuari, "No has introduït cap nom.");
    validacioPersonalitzada(domEmail, "No has introduït cap email.", !validarEmail(domEmail.value), "L'email no és vàlid.");
    esObligatori(domEdat, "No has introduït cap edat.");
    validacioPersonalitzada(domNivellAngles, "No has introduït el teu nivell d'anglès.", !validarNivellAngles(domNivellAngles.value), "No has introduït el teu nivell d'anglès.");
    esObligatori(domPassword, "No has introduït cap contrasenya.");
    validacioPersonalitzada(domPassowrdConfirm, "No has introduït la confirmació de la constrasenya.", !validarComprovaContrasenya(), "Les contrasenyes no coincideixen.");
    validacioPersonalitzada(domAcceptaCondicions, "No has acceptat els termes i condicions", !validarCondicions(), "No has acceptat els termes i condicions" );
});