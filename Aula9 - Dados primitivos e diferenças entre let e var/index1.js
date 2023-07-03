const nome = "Willian"; // 'Willian' `Willian` -> Strings
const nome1 = 'Willian'; // 'Willian' `Willian` -> Strings
const nome2 = `Willian`; // 'Willian' `Willian` -> Strings
const numero = 10; // 10.0  -> Number
const numero1 = 10.50  ; // 10.0  -> Number
let naoDefinido; // undefined - não aponta local na memoria
const nulo = null; // nulo - não aponta local na memoria
const booleanTrue = true;
const booleanFalse = false;

console.log(typeof(booleanFalse),booleanFalse);
console.log(typeof(booleanTrue),booleanTrue);
console.log(typeof(nulo),nulo);
console.log(typeof(naoDefinido),naoDefinido);
console.log(typeof(numero1),numero1);
console.log(typeof(numero),numero);
console.log(typeof(nome2),nome2);
console.log(typeof(nome1),nome1);
console.log(typeof(nome),nome);
