let esc1 = 0;
let esc2 = 0;
let esc3 = 0;
let pedido = esc1+esc2+esc3;
let estampaURL = document.querySelector(".imagemURl");

let objeto = {
model: "",
neck: "",
material: "",
image: "",
owner: "",
author: "",
}



function escolhaModelo (elemento,modelo) {
    const selecionado = document.querySelector(".selecionado");
    const borda = document.querySelector(".borda");

    if (selecionado !== null){
        selecionado.classList.remove("selecionado");
        borda.classList.add("borda");
        esc1 = 0;
    }
    elemento.classList.remove("borda");
    elemento.classList.add("selecionado");
    esc1 = 1;
    objeto.model= modelo;
    console.table(objeto);
}

function escolhaGola (elemento) {
    const selecionado = document.querySelector(".selecionado1");
    const borda = document.querySelector(".borda");

    if (selecionado !== null){
        selecionado.classList.remove("selecionado1");
        borda.classList.add("borda");
        esc2 = 0;
    }
    elemento.classList.remove("borda");
    elemento.classList.add("selecionado1");
    esc2 =1;
}

function escolhaTecido (elemento) {
    const selecionado = document.querySelector(".selecionado2");
    const borda = document.querySelector(".borda");

    if (selecionado !== null){
        selecionado.classList.remove("selecionado2");
        borda.classList.add("borda");
        esc3 = 0;
    }
    elemento.classList.remove("borda");
    elemento.classList.add("selecionado2");
    esc3 =1;
   
}

while(estampaURL.value!==""){
    liberarBotao ()
}

function liberarBotao (){
    console.log(estampaURL.value);
    alert("funcionou :)");
}