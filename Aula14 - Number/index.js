let num1 = 150.5556666;
let num2 = 2.5;

console.log(num1.toString() + num2);
// num1 = num1.toString(); Para converter permanentemente
console.log(num1.toString(2)); // converte para uma string dando seu valor binario
console.log(num1.toFixed(2)) // Deixa o numero com duas casas decimais
console.log(Number.isInteger(num1));
let temp = num1 * "ola";
console.log(Number.isNaN(temp ));


let nume1 = 0.7;
let nume2 = 0.1;

nume1 += nume2;
nume1 += nume2;
nume1 += nume2;

nume1 = Number(nume1.toFixed(2));

console.log(nume1);
console.log(Number.isInteger(nume1));