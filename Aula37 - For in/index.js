// for in -> le os indices ou chaves do objeto (variavel) e retona o indice

// const frutas = ["maça","uva","pera"];

// for (let i in frutas){
//     console.log(frutas[i]);
// }


const pessoa= {
    nome: "luiz",
    sobrenome: "miranda",
    idade: 34,
}

for (let index in pessoa){
    console.log(index, pessoa[index]);
}