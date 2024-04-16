const c1 = document.querySelector("#c1");
const cursosC1 = document.querySelectorAll(".c1");
const cursosC2 = [...document.querySelectorAll(".c2")]
const todosCursos =  [...cursosC1];

console.log(todosCursos)
todosCursos.map((el)=>{
    el.addEventListener('click', (evet)=>{
        const elementocliado = evet.target
            elementocliado.classList.add("destaque");
            console.log(el.innerHTML+" foi clicado")
    })
})

cursosC2.map((e)=>{
    e.addEventListener('click', (e)=>{
        const c2Clicado =e.target
            c2Clicado.classList.add("destaque2")

    })
})




// c1.addEventListener('click', (evt)=>{
//     const el = evt.target
//     el.classList.add('destaque')
//     console.log(el)//esta forma escrita dentro do console, a funcao target, ou em pt alvo, nos endica, qual elemento foi clicado
// })