// for of -> le os indices ou chaves do objeto (variavel) e retorna somente o valor

// const pessoa= ["luiz miranda", "otavio"]

// for(let index = 0; index < pessoa.length; index++){
//     console.log(pessoa[index]);
// }

// console.log("###");

// for(let index in pessoa){
//     console.log(pessoa[index]);
// }

// console.log("###"); 

// for (let index of pessoa){
//     console.log(index);
// }

// console.log("###");

// pessoa.forEach(function(elemento){
//     console.log(elemento);
// });

// console.log("###");

const pessoa= {
    nome: "luiz",
    sobrenome: "miranda",
    idade: 34,
}

// for of não funciona para elementos, pois não são iteraveis

for(let index in pessoa){
    console.log(index);
}

//Resumo
//For classico - geralmente com iteraveis(arrya,strings)
//For in - retorna o indice ou chaves(strings, arrays, elements)
//For of - retorna o valor em si
