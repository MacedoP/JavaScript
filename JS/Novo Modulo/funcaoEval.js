/*
    Vamos aprender sobre a funcao Eval()
*/

console.log(eval('2 + 2'));
console.log(eval(new String('2 + 2')));
console.log(eval('2 + 2') === eval(new String('2 + 2')));
console.log(eval('2 + 2') === eval('4'));