const pessoa = {
    nome:"Luiz",
    sobrenome:"Miranda",
    idade:25,
};
console.log(pessoa);

// function criapessoa(nome,sobrenome,idade){
//     return{
//         nome:nome,
//         sobrenome:sobrenome,
//         idade:idade,
//     };
// };

function criapessoa(nome,sobrenome,idade){
    return{nome, sobrenome,idade,};
};

const pessoa1 = criapessoa("luiz","miranda",25);
console.log(pessoa1 );

const pessoa2 = criapessoa("luiza","niram",25);
const pessoa3 = criapessoa("lucio","holanda",25);
const pessoa4 = criapessoa("paulo","masquete",25);
const pessoa5 = criapessoa("vania","candinda",25);

console.log(pessoa3.sobrenome, pessoa5.nome)

const metodo = {
    nome:"Luiz",
    sobrenome:"Miranda",
    idade:25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade}`);
    },

    incremento(){
        ++this.idade;
    },
};

metodo.fala();
metodo.incremento();

console.log(metodo.idade);
metodo.fala();