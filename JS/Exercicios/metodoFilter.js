//Neste exerciso vamops usar o metodo filter
function isBig(value){
    return value < 10
}

const mFilter = [12,5,8,130,44]
const res = mFilter.filter(isBig)
console.log(res);

//Localizar todos os números primos em uma matriz
const pValores= [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function isPrime(num){
    for(let i = 2; num > i;i++){
        if(num % i == 0){
            return false
        }
    }
    return num > 1
}

console.log(pValores.filter(isPrime));


// let randomNum=0;
// do {
//   randomNum = ( () => Math.floor( Math.random() * 10 ) )();
//   console.log( `Is the number ${ randomNum }?` );
// } while ( randomNum !== 3 );
// console.log( `Yes, ${ randomNum } was the correct number.` );

// //Funcao de Funcao
// function myFunction() {
//     function myNestedFunction() {
//         console.log( "This is my nested function." );
//     }
//     myNestedFunction();
// };

// myFunction();
// "This is my nested function."

