const parray = document.querySelector("#array")
const btn_reduzir = document.querySelector("#tbn_reduzir")
const resultado = document.querySelector("#resultado")


/*
    Para que serve o metodo reduzir?
    res: este metodo permite fazer uma reducao no nosso array
*/

const elementos_array = [1,2,3,4,5]
let ant=[];
let act=[]

parray.innerHTML= "["+elementos_array+"]";

btn_reduzir.addEventListener('click',(evet)=>{
    resultado.innerHTML = elementos_array.reduce((anterior,actual,pos)=>{
        act.push(actual)
        ant.push(anterior);
          return actual + anterior

    })
    resultado.innerHTML += "<br/>Valor anterior"+ ant+"<br/>Valor actual: "+act
    
})