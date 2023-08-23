let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

const valores = [varB, varC, varA];

[varA, varB, varC] = valores;

console.log(varA, varB, varC);

const valoresArray = ["A", "B", "C", "D", "E", "F","G"];

const [valor1, valor2, ,valor4 , ,valor6 , ...resto] = valoresArray;

console.log(valor1,valor2,valor4,valor6, resto);

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros[2][0]);

const [lista1, lista2, lista3] = numeros;

// são meios iguais para atingir o mesmo objetivo

const [,[,,seis]] = numeros;

console.log(lista2[2], seis);

