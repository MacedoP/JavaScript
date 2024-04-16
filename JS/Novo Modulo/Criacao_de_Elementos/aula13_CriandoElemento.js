const caixa = document.querySelector(".caixa")
const corpo = document.querySelector("body")
const photo = document.createElement("img")
const cursos = ["HTML", "CSS","JavaScript","Php","MySQL", "React","Python"];


cursos.map((el,id)=>{
    const elemento = document.createElement("div");
    elemento.setAttribute("id","c"+id)
    elemento.setAttribute("class","curso c1");
    elemento.innerHTML = el
    caixa.appendChild(elemento)
})


photo.setAttribute( "src", "./servo.jpg")
photo.setAttribute("class","foto")
corpo.appendChild(photo)

// /*
//     Obs: Nao podemos usar, ou criar os id, e as classe dentro do mesmo setAttribute, nao ira funcionar
// */
// cursos.map((el)=>{
//     elemento.setAttribute("id","c7")
//     elemento.setAttribute("class","curso c1")
//     caixa.appendChild(el)

// })
// // elemento.innerHTML= "Graphql"



// // console.log(caixa.children)
// // console.log(elemento.hasChildNodes)