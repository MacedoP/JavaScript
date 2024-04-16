//Nesta aula vamos falar com o metodo every parecido com o find mais so que nao, te deu mali

//Este metodo faz uma verificacao pico a pico em um array por exempelo , quando desejamos verificar idades, maior que 18, é necessario que todas as idade dentro do nosso arry sejam maior que 18, caso nao sejam, ele retorna false, pode ser usado para a proibicao de conteudo que os menores nao devem ter acesso

//Every = todos[comapara todos os elemento e segundo a regra estabelecida ele retona uma resposta]

const parray = document.querySelector("#array")
const btn_pesquisar = document.querySelector("#tbn_pesquisar")
const resultado = document.querySelector("#resultado")

const elementos_num =[21,25,20,19,18,22]
parray.innerHTML = "["+elementos_num+"]"

btn_pesquisar.addEventListener('click', (evt)=>{
    resultado.innerHTML= " Array nao conforme!"
    const res =elementos_num.every((e, i)=>{
        if(e < 18){
            resultado.textContent = "Array nao conforme na posica "+ i 
        }
        return e >= 18;
    })
    if(res){
        resultado.textContent = "Xuxu Belezaa"
    }
    console.log(res);
})

