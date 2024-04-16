const caixa1= document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btnCopiar = document.querySelector(".btnCopiar")
const todosCursos = [...document.querySelectorAll(".cursos")]


todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const avloCurso =evt.target
        avloCurso.classList.toggle("selecionado")
        console.log("O curso de "+ avloCurso.innerHTML+" foi clicado")
    })
})
btnCopiar.addEventListener('click',()=>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    const cursoNaoSelecionado = [...document.querySelectorAll(".todosCursos:not(.selecionado)")]
    //percorremos quais os cursos foram selecionados
    // console.log(cursoSelecionado)
    cursoSelecionado.map((e)=>{//pegamos todos os cursos selecionado dentro da caixa1 e colocamos dentro da caixa2
        caixa2.appendChild(e);
    })
    cursoNaoSelecionado.map((n)=>{
        caixa1.appendChild(n)
    })
})

// const todosCurdos =[...document.querySelectorAll("#divCursos")]
// let cursos = [...document.querySelectorAll(".cursos")]
// const cursoReceb = document.querySelector("#divRecebe")
// const btnCopiar = document.querySelector(".btnCopiar")

// cursos.map((el)=>{
//     el.addEventListener('click', (evt)=>{
//         const alvo = evt.target
//         console.log(" O curso selecionado foi: "+alvo.innerHTML)
//     })

//     btnCopiar.addEventListener( 'click' , ()=>{
//         const cSelecionado =[...document.querySelectorAll(".cursos")]
//         cSelecionado.classList.add("selecionado")

//     })

//     cursoReceb.appendChild(todosCurdos)
   
// })