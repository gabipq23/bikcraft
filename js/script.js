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