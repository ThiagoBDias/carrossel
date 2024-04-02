const box = document.querySelector("container");
const imagens = document.querySelector(".container img");

let contador = 0;

function slider(){
    contador ++;
}

setinterval(slider , 2000);
