/*
    Nesta aula lindissima nos vamor abordar a respito do GetElmentByClassName.

*/
const todosCursos = [...document.getElementsByClassName('curso')]; //Pegando todos os cursos
let cursosC1 = document.getElementsByClassName("c1"); 
cursosC1 =[...cursosC1]
let cursC2 = document.getElementsByClassName( "c2" );
cursC2 = [...cursC2]

//Pegandoa a posicao de um elemento
const cursoPosicao = document.getElementsByClassName('curso')//Podemos indicar a posiscao
console.log(cursoPosicao[2].textContent)//Ou tbm podemos indicar a posicao aqui



console.log(todosCursos);
console.log(cursosC1);
console.log(cursC2);

/*
    A funcao abaixo, nos permite adicionar uma outra configuracao em nosso texto, usando aclass destaque que foi criado  no nosso css
*/

cursosC1.map((e)=>{
    e.classList.add('destaque')
    console.log(e)
})

cursC2.map((el)=>{
    el.classList.add('destaque1')
})