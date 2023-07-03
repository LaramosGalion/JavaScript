const nome ="Willian";
const sobrenome = " Petreca Antunes";
const idade = 25;
const peso = 65;
const alturaEmMetros = 1.70;
let imc = peso/alturaEmMetros**2;
let anoNascimento = 2023 - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa",peso, "kg, tem", alturaEmMetros, "de altura e seu IMC é de", imc);
console.log(nome,"nasceu em",anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmMetros} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)