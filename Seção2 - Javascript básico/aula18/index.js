function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Kevin', 'Leal', 20);
const pessoa2 = criaPessoa('João', 'Silva', 30);
const pessoa3 = criaPessoa('Maria', 'Souza', 40);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);


const pessoa4 = {
    nome: 'Kevin',
    sobrenome: 'Leal',
    idade: 22,

    fala(){
    console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`)
    }
}

pessoa4.fala();
