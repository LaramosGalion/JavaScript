/*
Operadores Aritiméticos -> + - * / **
+ -> concatenação e adição
- -> subtração 
* -> multiplicação 
/ -> divisão
** -> potenciação
% -> resto da divisão
*/
/*
Precedêncial
()
**
* ou / ou % 
+ ou -
Caso tenha elementos de mesma precedencia a conta é efetuada da esquerda para direita-> ->
*/

const num1 = 5;
const num2 = 10;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1**num2);
console.log(num1%num2);

/*
Operadores de incremento e decremento
++ -> incremento de +1
-- -> decremento de -1
*/
let contador = 1;
contador = contador + 1; // São iguais no final, mas com o ++ fica mais resumido
contador++;
console.log(contador++);
console.log(contador);

/*
Operador de Atribuição
+= -> contador = contador + 50 -> contador += 50
-= -> contador = contador - 50 -> contador -= 50
*= -> contador = contador * 50 -> contador *= 50  
/= -> contador = contador / 50 -> contador /= 50
**= -> contador = contador ** 50 -> contador **= 50  
%= -> contador = contador % 50 -> contador %= 50  
*/
let passo = 2;
let contador1 =0;
console.log(contador1);
contador1 = contador1 +passo;
console.log(contador1);
contador1 = contador1 +passo;
console.log(contador1);
contador1 = contador1 +passo;
console.log(contador1);

passo = 10;
contador1 += passo;
console.log(contador1);
contador1 += passo;
console.log(contador1);

// Cuidados com os tipos pode haver momentos que o JS irá resolver os problemas, mas dever ter cautela quando usa operadores com tipos diferentes de numeros

const numero1 = 5;
const numero2 = "4";
console.log(numero1 + numero2);
const exemplo = "5.5";
const exemplo1 = parseInt("5.5");
const exemplo2 = parseFloat("5.5");
const exemplo3 = Number("5.5");

console.log(typeof(exemplo),typeof(exemplo1), typeof(exemplo2), typeof(exemplo3));