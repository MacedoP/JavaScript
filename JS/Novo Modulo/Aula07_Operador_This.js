//NESTA AULA VAMOS APRENDER A UTILIZAR O OPERADOR THIS
//settimeout() == gera um atraso  na execução de uma função, 
let vnome= 'João'
function aluno(nome, nota){
    //neste trecho de codigo, o this.nome, seria como se fosse uma outra variavel que recebe o valor da nossa variavel nome: na pratica seria assim, let alunoNome = nome, que é igual, a this.nome, valor passo por referencia
    this.nome = nome;//estes dados forma apagados por causa do setTimeout
    this.nota = nota;

    this.dados_anonimos =function(){//isto é uma funcao anonima
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)

    }
    this.dados_arrow =function(){//isto é uma arrow function 
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)

    }
    // vnome = nome//isto aqui é igual ao que esta em cima, mais com a passagem por valor
    // console.log(nome)
    // console.log(nota)

}
const aluno1 = new  aluno('Joao',85);
aluno1.dados_anonimos();
aluno1.dados_arrow( );

//aluno('Macedo',100)
//console.log(vnome);
