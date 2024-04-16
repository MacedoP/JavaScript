/*
    Nesta aula ver a utilidade do metodo filter() dentro do js
*/

//O metodo filter pode ser escrito deste jeito const filterMaior18 = idade.filter(valor,indice,arr

// const  filterMaior18 =(valor)=>{
//     if(idade >= 18)
//         return valor
    
// }
const idade = [15,21,30,17,18,44,12,50]
const maior = idade.filter((valor)=>{
    if(valor >= 18)
    return valor

})//A nossa funcao foi chamada aqui dentro

console.log(maior)
console.log(idade)
console.log("======================================================")

const menor = idade.filter((v)=>{
    if(v < 18)
    return v
})
console.log(menor)

// const  verificar =(n)=>{
//     if(n % 2 == 0)
//         return n
// }
    
// const numeros = [1,2,5,3,5,10,12,34,556,60]
// const resposta = numeros.filter(verifcar)

// console.log(resposta)






