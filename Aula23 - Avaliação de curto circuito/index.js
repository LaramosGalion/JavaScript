 /*
&& -> false && true -> false -> retornara o valor (value) se falso
|| -> true || false -> retornara o valor verdadeiro (value) se verdadeiro


 falsy values
 0
 "" '' `` -> strings vazias
 null / undefined
 NaN
 */

// AND &&

 console.log("string" && 0 && null && "string");

function ola(){
    return "Oi";
}

const executar = 0; //  

console.log(executar && ola()); // inves de se criar uma condição if verificando a  variavel, é possivel assimilar as duas com o && e assim verificar diretamente, economizando espaço no codigo

// OR || 

console.log( 0 || false || "" || "Otavio" || undefined); // Retornara o primeiro valor verdadeiro, no caso "Otavio", ignorando completamente o restante

const corUsuario = null; // cor que será pega pelo usuário

const corPadrao = "black";

console.log(corUsuario || corPadrao);

// teste simples de mudança de cor, em que se o usuário selecionar algo, esse será um valor verdadeiro, sendo assim será o primeiro a ser selecionado em uma cadeia de OR (||)
