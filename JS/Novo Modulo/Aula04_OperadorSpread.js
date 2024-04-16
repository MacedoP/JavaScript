//Este comando foi adicionado no ecmascript 6, é usado para espalhar um vetor ou arry, tbm usado para copiar os valores de um array
let jogador ={
    nome: "Macedo",
    energia: 100,
    vidas: 3

}
let jogador2 ={
    nome: "Divou",
    energia: 100,
    vidas: 5,
    forca: 27
}
let jogador3 ={...jogador,...jogador2}

console.log(jogador3)
console.log("================================================")

let v1 = [10,20,30]
let v2 = [11,22,33,44,55]
let n3 = [100,200,300,...v1, ...v2]

n3.map((el)=>{
    console.log(el)
})
console.log("================================================")
function soma(v1,v2,v3){
    return v1+v2+v3
}
let r = [1,5,7]
console.log(soma(...r))