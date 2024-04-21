let valores = [1,2];
let op= [
    (val)=>{
        let res =0;
            for(v of val){
                res+=v
            }
            return res
        },
        (val)=>{
            let res=1;
            for(v of val){
                res *= v
            }
            return res
        },
        (val)=>{//funcao usada  epenas para mostrar os valores do nosso array
            for(v of val){
                console.log(v);
            }
    }
]
console.log(op[1](valores));