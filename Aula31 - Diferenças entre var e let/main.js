// Let rem escopo de bloco(dentro de chaves), quando declarada dentro e ao mesmo tempo fora, a prioridade sera a declaração interna
// Var tem escopo de função

let nome = "Olá"; // criando

var nome2 = "Mundo"; // criando

if (1 > 0) {
    let nome = "Olá Mundo"; // criando
    var nome2 = "Teste"; // redeclarando

    // quando redeclarada com var dentro do bloco ela tera esse em todos os escopos 

    console.log(nome, nome2);
}

// nome dentro do bloco é diferente do nome declarado no escopo global, entretanto há uma sequência em que caso a variavel que está sendo chamada não esteja no bloco o motor de processamento do JS irá para o bloco superior procurar por essa variavel e assim por diante


function falaOi(){
    console.log("oi");
    var teste = "teste";
    if (1 > 0){
        var teste = "novo teste"

    }
    console.log(teste);
}

falaOi();

// console.log(teste); 

// as funções como visto anteriormente podem usar variaveis do escopo global, mas mesmo com var as variaveis dentro das funções não podem ser acessadas fora da função, tendo um escopo especial, mas var pode ser redeclarada dentro do escopo da função

// com var acontence a elevação do codigo(Hoisting), que é quando se chama uma variavel ( ou uma função), mas ela está declarada posteriormente, assim a engine do JS "coloca" esssas declarações no começo do arquivo. Diferentemente do let que dara um erro caso isso aconteça, em que o correto e declarar ela para depois ela ser chamada

// Exemplo chamar uma função(function) antes de quando ela foi feita na leitura do codigo