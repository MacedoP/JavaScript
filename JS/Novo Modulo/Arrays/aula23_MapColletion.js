/*
    Existe o metodo Map() usado para percorrer array, mais tambem existe a colecao Map

*/
const caixa = document.querySelector("#caixa");

let mapa = new Map();

mapa.set("curso","JavaScript");
mapa.set(13, "Salario");
mapa.set(2,"canal")



caixa.innerHTML = mapa.get("curso")//forma de obter um valor
if(mapa.has(2)){//Fazendo a verificacao se a key 2 exite dentro da nossa colecao
    caixa.innerHTML = 'Existe na sua colecao'
}else{
    caixa.innerHTML = 'Nao exite na sua colecao'
}

console.log(mapa);