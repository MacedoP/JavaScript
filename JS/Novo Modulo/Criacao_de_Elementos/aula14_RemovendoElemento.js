const caixa = document.querySelector(".caixa")
const cursos = ["HTML", "CSS","JavsScript","PHP","React","MySQL"]

//Nesta aula vamos estudar o comando para remocao de um elemento


cursos.map((c,key)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c"+key)
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = c
    
    const lixeira = document.createElement("img")
    lixeira.setAttribute("src","./recycle-regular-24.png")
    lixeira.setAttribute("class","lixeira")
    
    lixeira.addEventListener('click',(evt)=>{//O curso que for clicado vai ser removido
        caixa.removeChild(evt.target.parentNode)
    })

    newElement.appendChild(lixeira)
    caixa.appendChild(newElement)
})