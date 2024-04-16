const container = document.querySelector(".container")
const caixa = document.querySelector(".caixa")
const cursos = ["JavaScript", "React","Html", "Css", "Angular", "typeScript"]

cursos.map((el, id)=>{
    const newElement = document.createElement("div")
    caixa.appendChild(newElement)
    newElement.setAttribute("id", "c"+id)
    newElement.setAttribute("class", "cursos")
    newElement.innerHTML= el

    newElement.addEventListener('click',(evt)=>{
        const clicado = evt.target
        console.log("O curso de "+clicado.innerHTML+" foi clicado");
    })

})