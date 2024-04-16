const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelectorAll("#c1_2")
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemover = document.querySelector("#btnRemoverCurso")

cursos.map((el, id)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+id)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML= el
   
    const comandos = document.createElement("div")
    comandos.setAttribute("class","comandos")

    const btnradios = document.createElement("input")
    btnradios.setAttribute("type","radio")
    btnradios.setAttribute("name","btnradios-curso")

    comandos.appendChild(btnradios)//dentro da div comando encontram-se os nossos input radios filho de novoElemento
    novoElemento.appendChild(comandos)//e dentro dos novoElemento encontra-se a div comandos que possui os inputs radios Parenet do caixaCurso, que por regra seu pais
    caixaCursos.appendChild(novoElemento)
})


//Funcao usada para percorrer os nossos input radio
const CursoSelecionado =()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado = todosRadios.filter((ele)=>{
        return ele.checked

    })
    return radioSelecionado[0]
}
//Btton que mostra qual curso foi selecionado

btnCursoSelecionado.addEventListener('click',(evt)=>{
    const selecionado = CursoSelecionado();
    //try catch usado para verificar erros
        try{
    
            const cursoMarcado= selecionado.parentNode.parentNode.previousSibling.textContent
            alert("Curso selecionado: "+ cursoMarcado)
        }catch(error){
            alert("Seleciona um curso! ")
    }
    // console.log(todosRadios)
    // console.log(radioSelecionado)
})

//Button para remover um curso selecionado
btnRemover.addEventListener('click',(evt)=>{
    const Cselecionado = CursoSelecionado()
    if(Cselecionado != undefined){
        const cursoMarcado= Cselecionado.parentNode.parentNode
        cursoMarcado.remove()

    }else{
        alert("Seleciona o curso que deseja remover!")
    }
   


})
