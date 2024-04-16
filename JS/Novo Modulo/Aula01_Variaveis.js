//Nesta aula vamos estudar sobre variaveis, em js nos temos [var=(Faznedo o uso esta variavel, ela nao tem restricao de escopo), let, const]
/*
    Var = tem restricao de escopo dentro de uma funcao

*/

class pessoa{
    nome = "Macedo"
    idade = 23;
    sexo = "M";

    constructor(nome,idade,sexo){
        this.nome =nome;
        this.idade=idade;
        this.sexo=sexo;
    }
}




if(true){
    let n = "Macedo";
  

}
//console.log("O seu nome é: ",n );
let randInt = Math.random(0,10);
console.log(randInt)

