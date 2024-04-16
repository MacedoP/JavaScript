/*
    Nesta aula vamos abordar sobre o metodo Some: ele vai me dar oke quando pelo menos um elemento estiver na regra
*/
const parray = document.querySelector("#array")
const btn_pesquisar = document.querySelector("#tbn_pesquisar")
const resultado = document.querySelector("#resultado")

const elementos_num =[16,12,17,15,13,11,10,20]
parray.innerHTML = "["+elementos_num+"]"


btn_pesquisar.addEventListener('click', (evt)=>{
    const res = elementos_num.some((e, i)=>{
        if(e < 18){//minha regra para retornar um OK, basta que dentro do meu array uma valor passado seja maior que 18
            resultado.textContent = "Array nao conforme na posicao "+i 
        }
        return e>=18

    })
    if(res){
        resultado.textContent = "OK"
    }
    
})