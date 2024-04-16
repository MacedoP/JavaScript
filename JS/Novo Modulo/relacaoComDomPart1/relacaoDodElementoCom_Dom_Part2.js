const caixa = document.querySelectorAll("#caixa")
const cursos = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const c1 = document.querySelector("#c1")


console.log(caixa.children)

// console.log(c1_2.parentNode.parentNode)//indicando o avo

// caixa.map((el)=>{
//     el.addEventListener('click', (evt)=>{
//        el.firstElementChild.classList.add("adicionar") 
//     //    el.lastElementChild.classList.remove("adicionar")

//     //    el.lastElementChild.classList.add("adicionar")
//     // el.firstElementChild.classList.remove("adicionar")
//     })
// })
// caixa.map((e)=>{
//     e.addEventListener('click',(evt)=>{
//         evt.stopPropagation()
//     })
// })

/*  
    Metodo  usado para verificar se um elemento dentro de um Parent possui um filho ou nao.
    hasChildNodes = retorna = true caso o elemento tem filho, caso nao retorna false.


    Quando usamos este metodo para verificar se um elemento tem filho, o conteudo desse elemento seja um texto ou imagem, sera o filho desse elemento.
*/


// console.log(c1.hasChildNodes())//perguntei se o meu primeiro elemento tem filho
// console.log(caixa.hasChildNodes())


//Atencao esta verificao abaixo foi feita nos cursos e nao na caixa, fiz na caixa ou no pai deu, ate porque eu queria saber se o filho tbm tem filho, e nao se o pai tem filho

//Usando o operador ternario

// r = (cursos[4].children.length > 0)? "Tem fihlos" :  "Nao tem fihlos";
// console.log(r)

    // if(caixa.children.length > 0){
    //     //se o tamanho=> length for maior que zero, o que quer dizer que tem filho
    //     console.log("Tem fiho");
    // }else{
    //     console.log("Nao tem nunhum filho");
    // }