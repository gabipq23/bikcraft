// ativar links do menu
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
    // console.log(link);
    const url = window.location.href;
    const href = link.href;
    if(url.includes(href)){
        link.classList.add("ativo");
    }

}

links.forEach(ativarLink);

//ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
   const elemento = document.getElementById(parametro);
   if (elemento) {
    elemento.checked = true;
   }  
}

parametros.forEach(ativarProduto);

// perguntas frequentes; melhorando a cessibilidade

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);  
}

perguntas.forEach(eventosPerguntas);


// galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function trocarImagem(event){
    const img = event.currentTarget;
    const midia = matchMedia("(min-width: 1000px)").matches;
    if(midia){
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);
