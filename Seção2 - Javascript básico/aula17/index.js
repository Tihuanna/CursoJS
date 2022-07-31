function saudacao(nome) {
    return "Bom dia! " + nome
}

const variavel = saudacao('Kevin');
console.log(variavel); 

//--------

function soma(x,y) {
    const resultado = x+y;
    return resultado;
}

console.log(soma(2,2))
console.log(soma(2,8))
console.log(soma(2,10))

//--------

const raiz =(n) => n ** 0.5;


console.log(raiz(9))