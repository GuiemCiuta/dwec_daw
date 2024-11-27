const domForm = document.getElementById("form");
const domNomUsuari = document.getElementById("nom-usuari");
const domEmail = document.getElementById("email");
const domPassword = document.getElementById("password");
const domPassowrdConfirm = document.getElementById("password-confirm");

function mostraError(input, text) {
    const formControl = input.parentElement;
    formControl.classList.add("error");
    formControl.querySelector("small").innerText = text;
}

function mostraCorrecte(input) {
    const formControl = input.parentElement;
    formControl.classList.add("correcte");
}

domForm.addEventListener("submit", function(e) {
    e.preventDefault();

    if(domNomUsuari.value === '') {
        mostraError(domNomUsuari, "No has introduït cap nom.");
    } else {
        mostraCorrecte(domNomUsuari);
    }

    if(domEmail.value === '') {
        mostraError(domEmail, "No has introduït cap email.");
    } else {
        mostraCorrecte(domEmail);
    }

    if(domPassword.value === '') {
        mostraError(domPassword, "No has introduït cap contrasenya.");
    } else {
        mostraCorrecte(domPassword);
    }

    if(domPassowrdConfirm.value === '') {
        mostraError(domPassowrdConfirm, "No has introduït la confirmació de la constrasenya.");
    } else {
        mostraCorrecte(domPassowrdConfirm);
    }
});