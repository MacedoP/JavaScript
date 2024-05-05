const main = document.querySelector(".principal");
const caixa = document.createElement("div")
caixa.setAttribute("id", "caixa")
main.appendChild(caixa)

const carros = ["Polo", "Golf", "T-Cross","HRV"];
let ul =`<ul>`
    carros.forEach((el)=>{
        ul+=`<li>${el}</li>`
    })
    ul+`</ul>`
    caixa.innerHTML = ul
// const curso = "JavaScript";
// const canal = "CFB Curso";
// // const frase = " Este é o curso de "+ curso + " do canal "+ canal; Impressao normal

// const frase = `Este é o curso ${curso} do  canal ${canal}` //Fazendo o uso de template

// caixa.innerHTML = frase
