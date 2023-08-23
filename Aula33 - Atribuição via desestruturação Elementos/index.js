const pessoa = {
    nome: "Nome",
    sobrenome: "Sobrenome",
    idade: 18,
    endereco:{
        rua: "rua",
        numero: 10,
    },
};

const nome1 = pessoa.nome;

const {nome = "", sobrenome: sobre, concluir = "sim", endereco: {rua, numero}}  = pessoa;

const { nome: name, ...resto} = pessoa;

console.log(nome, sobre, rua, numero);

console.log(resto);
// como nos arrays, é pego valores de um elemento (pessoa) e atribuido por meio de sua parte de definição, no caso as chaves, partes que se deseja ser atribuidas