/*
    NESTA AULA VAMOS USAR O GETELEMENTBYTAGNAME == na pratica o que isso faz, ao usar tagName,ele vai pegar todas as tags do meu html que sao iguais 
    por exemplo que se usarmos uma div, e chamarmos por byTagName, e vai pegar todas as divs do nosso html

    OBS: quando se usa o GetElementByTagName, temos que lembrar que a funcao map, nao ira funcionar com este metodo, retorna uma colecao de elementos.
    OBS: para usar  o getElementsByTagName com a funcao map, precisamos usar o OPERADOR SPREAD const  listaDivs = [...document.getElementsByTagName('div')] 
*/

const dc1 = document.getElementById("c1")
const dc2 =document.getElementById('c2')
const dc3 =document.getElementById('c3')
const dc4 =document.getElementById('c4')
const dc5 =document.getElementById('c5')
const dc6 =document.getElementById('c6')

// const arraCursos=[dc1,dc2,dc3,dc4,dc5,dc6]
// arraCursos.map((e)=>{
//     console.log(e);
//     //console.log(e.textContent)
// })
let  listaDivs = document.getElementsByTagName('div') //pega todos os elementos com a tag div dentro do nosso html
listaDivs =[...listaDivs]
console.log(listaDivs)

listaDivs.map((e)=>{
    console.log(e)
})