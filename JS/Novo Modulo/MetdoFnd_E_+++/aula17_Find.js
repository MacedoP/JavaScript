//Nesta aula vamos falar do metodo Find
//Fizemos a chamada dos nossos elemento do nosso html
const parray = document.querySelector("#array")
const txt_pesuisar = document.querySelector("#txt_pesuisar")
const tbn_pesquisar = document.querySelector("#tbn_pesquisar")
const resultado = document.querySelector("#resultado")

const elementosArray =Array(10,58,2,9,15,10)
parray.innerHTML=  "["+elementosArray+"]"

tbn_pesquisar.addEventListener('click',()=>{
    resultado.innerHTML = "Valor nao encontrado! "
    elementosArray.find((e,i)=>{
        if(e==txt_pesuisar.value){
            resultado.innerHTML = "O valor da pesuisa é "+e+" na posicao "+i
        }
        
    })
   
})


