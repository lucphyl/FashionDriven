// nome do usuario
let dono = prompt ("por favor digite seu nome");
objeto.owner= dono;

//variaveis simples
let esc1 = 0;
let esc2 = 0;
let esc3 = 0;
let pedido = esc1+esc2+esc3;
let estampaURL = document.querySelector(".imagemURl");

// objeto para postar
let objeto = {
model: "",
neck: "",
material: "",
image: "",
owner: "",
author: "",
}

//escolhas do usuario
function escolhaModelo (elemento,modelo) {
    const selecionado = document.querySelector(".selecionado");
    const borda = document.querySelector(".selecionado");

    if (selecionado !== null){
        selecionado.classList.remove("selecionado");
        borda.classList.add("borda");
        esc1 = 0;
    }
    elemento.classList.remove("borda");
    elemento.classList.add("selecionado");
    esc1 = 1;
    objeto.model= modelo;
}

function escolhaGola (elemento,gola) {
    const selecionado = document.querySelector(".selecionado1");
    const borda = document.querySelector(".selecionado1");

    if (selecionado !== null){
        selecionado.classList.remove("selecionado1");
        borda.classList.add("borda");
        esc2 = 0;
    }
    elemento.classList.remove("borda");
    elemento.classList.add("selecionado1");
    esc2 =1;
    objeto.neck= gola;
}

function escolhaTecido (elemento,tecido) {
    const selecionado = document.querySelector(".selecionado2");
    const borda = document.querySelector(".selecionado2");

    if (selecionado !== null){
        selecionado.classList.remove("selecionado2");
        borda.classList.add("borda");
        esc3 = 0;
    }
    elemento.classList.remove("borda");
    elemento.classList.add("selecionado2");
    esc3 =1;
    objeto.material= tecido;
}

//liberar botão
function liberarBotao (){
    
    const livre = document.querySelector(".botaoFechado");
    if ( pedido===3 && estampaURL.value == true){
        livre.classList.remove("botaoFechado");
        livre.classList.add("liberado")
    }
}