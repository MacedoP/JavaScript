//Nesta aulas vamos falar sobre objetos em JavaScript, na pratica orientacao a objetos
/*
    Um construtor é como se fosse um molde, vou explicar, se criarmos um construtor, já com valores passados nele ,entao todos as instacao dessa mesma classe teram esses valores
    automaticamente
*/

class Carro{

    constructor(nome, tipo){
        this.nome=nome

        if(tipo === 1){
            this.tipo = "Esportivo";
            this.valoMax = 300;
        }else if(tipo === 2){
            this.tipo = "Utilitario";
            this.valoMax = 100;
        }else if(tipo === 3){
            this.tipo = "Passeio";
            this.valoMax = 160;
        }else{
            this.tipo = "Militar";
            this.valoMax = 180;
        }

    }
    
    infoCarros(){
        console.log(`O nome do teu carro é: ${this.nome}`);
        console.log(`O teu carro é do tipo: ${this.tipo}`);
        console.log(`O teu carro tem uma velocidade de : ${this.valoMax}`);


    }



}
let c1 = new Carro("Camaro",1);
let c2 = new Carro("Limosine",2);
let c3 = new Carro("Mini Cooper",3);
let c4 = new Carro("Camase",4)

c1.infoCarros();
console.log("===================================");
c2.infoCarros();
console.log("===================================");
c3.infoCarros();

class Pessoa{


    constructor(nome){
        this.nome = nome;
    }
}




