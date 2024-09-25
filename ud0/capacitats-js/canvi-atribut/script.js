const img = document.getElementById("img");

function canviaImg() {
    if(img.src === "https://s1.elespanol.com/2023/11/28/enclave-ods/813179001_237982438_1024x576.jpg") {
        img.src = "https://t2.ea.ltmcdn.com/es/posts/8/6/7/la_alimentacion_del_pinguino_20768_600.jpg";

    } else {
        img.src = "https://s1.elespanol.com/2023/11/28/enclave-ods/813179001_237982438_1024x576.jpg"
    }

}