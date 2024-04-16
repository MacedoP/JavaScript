const caixa = document.querySelector("#caixa")
const cursos = [...document.querySelectorAll(".curso")]

// console.log(caixa.children[caixa.children.length - 1])//pegando os filho da caixa

/*
    Obs: se usares por exemplo: caixa.firstchild => vamos receber o conteudo da firstchild, na pratica o que esta dentro dela, mais se usarmos: caixa.firstElementchild => vamos pegar a div, como filho em si
*/

console.log(caixa.children)//pegando todos os elementos

console.log("Eu sou o primeiro filho "+caixa.firstElementChild.innerHTML)//pegando o primeiro elemeto dentro da div

console.log("Eu sou o ultimo filho "+caixa.lastElementChild.innerHTML)//pegando somente o ultimo elemento dentro da div Parent

console.log(document.getRootNode())//serve para pegar toda a nossa pagina html Metodo

console.log(cursos[0].ownerDocument)//tem a mesma funcao que a funcao de cima Proprieade