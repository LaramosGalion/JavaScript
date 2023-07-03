/*
Não pode criar constantes com palavras reservadas
Constantes devem ter nomes significativos
Não podem iniciar com números
Não podem conter espaços ou traços
Utiliza camelCase
Case-sentive
Não pode redeclara-lá, nem modificar
Utilizar const, e não var
*/

const nome = "Willian";
console.log(nome);
let nome1 = nome;
console.log(nome1);

let num1 = 5;
num1 = "5"
const num2 = 10; 
const resultado = num1 * num2;
const resultadox2 = resultado * 2;
let resultadox3 = resultado * 3;
resultadox3 = resultadox3 + 5;  
console.log(resultado);

console.log(typeof num1);
console.log(typeof(num1));
console.log(typeof(num1+num2))


// As constantes permanençem inalteradas, permitindo o uso dela diversas vezes, já as variaveis quando reatribuidas, perdem o valor original
// JavaScript linguagem de tipagem dinamica, as "valores" ja tem um tipo, não precisando ser atribuido um a eles previamente
// String = texto / Number = número
// typeof - revela o tipo do "valor"
// constante - inalteravel
// variavel - reatribuivel