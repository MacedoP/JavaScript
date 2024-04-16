const caixa1 = document. querySelector(".caixa1")
const frutas = ["manga","abacate","ananas","apple"]

frutas.map((el,id)=>{
   const novoElemento = document.createElement("div")
   novoElemento.setAttribute("id", "f"+id)
   novoElemento.setAttribute("class","frutas")
   novoElemento.innerHTML = el
   
   
   novoElemento.addEventListener('click', (evt)=>{
       caixa1.removeChild(evt.target)
       console.log("A fruta "+novoElemento.innerHTML+" foi removido")
    })
    caixa1.appendChild(novoElemento)

})
// for(let i = 0; i < 10;i++){
//     const novoElemento = document.createElement("div")
//     caixa1.appendChild(novoElemento)

// }
const n = Array("Macedo")
