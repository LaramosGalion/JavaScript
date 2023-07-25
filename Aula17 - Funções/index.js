function saudacao(nome) {
    return `Olá ${nome}`;
    
};

saudacao("willian");
console.log(saudacao("maria"));
const variavel = saudacao("pedro");
console.log(variavel);

function soma (num1, num2){
    console.log("Olá Mundo")
    return num1 + num2;
    console.log("Olá Mundo") 
}

function sum (num1 = 15, num2 = 5){
    let resultado = num1 + num2;
    return resultado;
}

console.log(soma(15, 15), sum(20,20));

const resultado = sum(40, 40);
 
console.log(resultado);

const teste = sum();

console.log(teste);

// Function por variavel - função anonima

const raiz = function (numero){
     return numero ** 0.5;
};
console.log(raiz(81)); 

// Arrow Function

const raizz = (numero) =>{
    return numero ** 0.5;
};

console.log(raizz(225));

// Simplificação 

const square = n => n ** 0.5;

console.log(square(400));