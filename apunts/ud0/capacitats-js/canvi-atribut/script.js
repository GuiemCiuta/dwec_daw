const img = document.getElementById("img");

function canviaImg() {
    if(img.src === "https://s1.elespanol.com/2023/11/28/enclave-ods/813179001_237982438_1024x576.jpg") {
        img.src = "https://t2.ea.ltmcdn.com/es/posts/8/6/7/la_alimentacion_del_pinguino_20768_600.jpg";
        img.width = 800;

    } else {
        img.src = "https://s1.elespanol.com/2023/11/28/enclave-ods/813179001_237982438_1024x576.jpg"
        img.width = 400;
    }
}

const button = document.getElementById("button");

function canviaPos() {
    const newTop = Math.random() * 600;
    const newLeft = Math.random() * 600;

    console.log(newTop, newLeft);

    button.style.position = "absolute";
    button.style.top = newTop + "px";
    button.style.left = newLeft + "px";
}

function canviaEstil() {
    const titulo = document.getElementById("titulo");
}