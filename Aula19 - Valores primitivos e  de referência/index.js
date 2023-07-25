/*
Primitivos(imutáveis) - String, Number, Boolean, undefined, null - (bigint, symbol) - Valores copiados

Referência(geralmente mutáveis) - Arrays, Objects, Function - Passados por referência (referência um mesmo local na memória)

*/

/*

let a = "A";
let b = a; // Cópia

console.log(a,b);

a = "B";

console.log(a,b);

 */

/* 

let a = [1,2,3];
let b = a; // Linkamento

a.push(4,5,6);

console.log(a,b);

b.pop();

console.log(a,b);

let c = [...b];

c.push("novo");

console.log(c,b);

*/


const pessoaA = {
    nome:"Carlos",
    sobrenome:"Vicente",
};

const pessoaB = {...pessoaA};
 
pessoaB.nome = "Pedro";

console.log(pessoaA);
console.log(pessoaB);

