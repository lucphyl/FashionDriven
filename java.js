// nome do usuario
let dono = prompt ("por favor digite seu nome");


//variaveis simples
let esc1 = 0;
let esc2 = 0;
let esc3 = 0;
let pedido = 0;
let estampaURL = document.querySelector(".imagemURl");

// get e post axios
const pedidosProntos = axios.get ('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
pedidosProntos.then(UltimosPedidos);

// objeto para postar
let objeto = {
model: "",
neck: "",
material: "",
image: "",
owner: "",
author: "",
}
objeto.author= dono;
objeto.owner= dono;
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
    liberarBotao ();
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
    liberarBotao ();
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
    liberarBotao ();
}
liberarBotao ();
//liberar botão
function liberarBotao (){
    const livre = document.querySelector(".botaoFechado");
    pedido = esc1 + esc2 +esc3;
    if (pedido ==3 && objeto.image != ""){
        livre.classList.remove("botaoFechado");
        livre.classList.add("liberado");
    }
}

function encomendar (){
    const encomenda = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', objeto);
    encomenda.then(tratarSucesso());
    encomenda.catch(tratarFalha());
}

function tratarSucesso(resposta) {
	console.log(resposta); 
}

function tratarFalha(erro) {
	console.log(erro);
}

function enviar(){
    objeto.image = estampaURL.value;
    console.table(objeto);
    liberarBotao ();
}

function UltimosPedidos(){
    alert ("servidor liberado");
}

