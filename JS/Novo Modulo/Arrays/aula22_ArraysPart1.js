/*
    Vamos comecar a falar de arrays 
<<<<<<< HEAD
 */

    const numeros = [1,2,3].push(4)

    console.log(numeros.push(5))
=======
    Array é um conjunto de valores
    Obs: dentro de um array em js podemos armazer diversos valores ou tipos diferentes
 */
let cursos = ["HTML", "CSS","JavaScript"];
const conteiner = document.querySelector(".conteiner")

cursos.push("C#")
cursos.push("Java")//metodo usado para adicionar elemento no final do array
cursos.pop()//metodo usado para remover elemento no final do array
cursos.unshift("Java")//metodo usado para adicionar elemento no inicio do array

cursos.map((el)=>{
    const dviElemento = document.createElement("div")
    dviElemento.setAttribute("class", "cursos")
    conteiner.appendChild(dviElemento)
    dviElemento.innerHTML = el

    dviElemento.addEventListener('click', (evet)=>{
        const clicado = evet.target
        clicado.classList.add("newColor")
        console.log("O curso clicado foi: "+clicado.innerHTML);
    })
})



console.log(cursos)
>>>>>>> 3c6176b18447dd7417525e99c1509266effa9a9c
