window.addEventListener("click", function (e) {
    const newDot = document.createElement("div");
    newDot.classList.add("dot");
    newDot.style.top = e.pageY + "px";
    newDot.style.left = e.pageX + "px";

    document.body.appendChild(newDot);

    checkIfMustRemoveDots(e.clientY);
});

function checkIfMustRemoveDots(clientY) {
    console.log(clientY, window.screen.height);

    if (clientY > window.screen.height * .7) {
        clearDots();
    }
}

function clearDots() {
    const dots = document.querySelectorAll(".dot");

    for (let i = 0; i < dots.length; i++) {
        dots[i].remove();
    }
}