document.addEventListener("DOMContentLoaded", function() {
    const abecedarioDiv = this.getElementById("abecedario");
    const letraDivs = this.querySelectorAll("letra");

    function generaAbecedario() {
        const abecedario = [];
        
        for(let i = 65; i < 90; i ++) {
            abecedario.push(String.fromCharCode(i));
        }
        
        return abecedario;
    }
    
    function pintaAbecedario() {
        const ABECEDARIO = generaAbecedario();

        for(let letra of ABECEDARIO) {
            const letraDiv = document.createElement("div");
            letraDiv.classList.add("letra");
            letraDiv.innerText = letra;
            abecedarioDiv.appendChild(letraDiv);
        }
    }


    abecedarioDiv.addEventListener("click", function(e) {
        if(e.target.classList.contains("letra")) {
            e.classList.add("clickada");
        }
    });


    pintaAbecedario();

});