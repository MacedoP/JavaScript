// Nesta aula vamos começar a falar dos medotodos para pegar os elementos no nosso html
//Nesta aula aprendemos como usar o getElementById= usado para mexer em um unico elemento
//GetElementById = retorna um array

const dc1 = document.getElementById("c1")
const dc2 =document.getElementById('c2')
const dc3 =document.getElementById('c3')
const dc4 =document.getElementById('c4')
const dc5 =document.getElementById('c5')
const dc6 =document.getElementById('c6')
const clica = document.getElementById("mostrar")

clica.addEventListener('click',clicar)
function clicar(){
    clica.innerHTML ="Olha e vé!!"

}


const arrayCursos = [dc1,dc2,dc3,dc4,dc5,dc6];
console.log(arrayCursos.innerHTML)

arrayCursos.map((e,i,a)=>{
    console.log(e.textContent+" posicao "+i)
    // e.textContent= "New"
})

//PERCORRENDO O MEU ARRAY USANDO FOR OF
// for(d of arrayCursos){
//     console.log(d)
//     d.textContent= "Ola"
// }

console.log(arrayCursos)
console.log(dc1)  //Pega o conteudo dentro do c1, passado para dc1, e mostra no console nesse caso seria a estrutura da div
console.log(dc1.id)    //Retorna o  id do elemento
console.log(dc1.innerHTML)   //Usado para mostrar  o que está dentro dele,na pratica o esta dentro do c1 como um text
dc1.textContent ="Pitom"




// function clicar(){
//     const clicar = document.getElementById('mostar')
//     //clicar.style.backgroundcolor= "red";
//     clicar.textContent="CLICOU";
// }