/*
    Nesta aula nos vamos falar da funcao Map, que é usada para percorrer arrays ma.((el=os elementos do array, i= indice ou posicao dos valores do array), usamos quando queremos percorrer um arry sem interrupcao)
*/
// const cursos = ["HTML", "CSS", "JAVASCRIPT","PHP","REACT"]

// cursos.map((el, i)=>{
    //     console.log("Curso: "+ el + " Posicao "+ i)

// })
// console.log("===================================")
// console.log("Funcao mmap com retorno")
// //Usando o map com return

// let c = cursos.map((el)=>{
//     return el
// })
// console.log(c)

// let el = document.getElementsByTagName('div')
// let val = Array.prototype.map.call(el,({innerHTML})=> innerHTML);//uso do map sem ser associado directamente ao elementos
// console.log(val);//qunado imprime pela primeira vez recebe um undefined no meu console, isso porque colocamos o segundo innerHTMl dentro das chaves
// el=[...el]
// console.log(el[0])
// console.log(el[1])

// el.map((e)=>{
//     e.innerHTML = "Python";
//     //console.log(elementos.innerHTML);
    

// })
//VAMOS ESCREVER UMA FUNCAO QUE RECEBE QUALQUER VALOR E ESTA FUNCAO VAI FAZER A CONVERSAO PARA UM VALOR INTEIRO

// const convertInt =(e)=> parseFloat(e)//FORMA DE CONVERTER VALOR NO JS

// let dobrar = (e)=>e *2;
// let num = [1,3,4, 5,6,7].map(convertInt)//PERCORREU OS VALOREES E DEPOIS FEZ A CONVERSAO DOS MESMOS
// //let num = [1,3,4, 5,6,7].map(dobrar)=usamos para mostrar o dobro do valores  em um array de numeros
// console.log(num)
// console.log(typeof(num))
// console.log(dobrar)


let nomes = ['Macedo','Armando','Francisco','Paulo','Miguel']
let n = nomes.map((el)=>{
    return `${el}`
})
console.log(n)


