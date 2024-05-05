/*
    Este metodo nao permite a repeticoes de elementos
*/
const caixa = document.createElement("div");
const main = document.querySelector(".principal");

main.appendChild(caixa)
caixa.setAttribute("id", "caixa")


let musicas = new  Set(["musica1", "musica boa", "musica 10"])
musicas.add("musica da regra");//Forma de adicionar mais elementos na nossa colecao
musicas.add("musica1")
console.log(musicas)

musicas.delete("musica1")//Forma para apagar elemento indicando qual
musicas.clear()//Forma de limpar, ou na pratica apagr todos os elementos do nosso array

musicas.forEach((el)=>{
    caixa.innerHTML += el
})

//Usando o forOf para percorrer as musicas
// for(let m of musicas){
//     console.log(m)
// }