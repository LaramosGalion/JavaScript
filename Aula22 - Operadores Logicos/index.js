/* 
operadores lógicos
&& - and -> e  - todas devem ser verdadeiras para retornar verdadeiro
|| - or  -> ou - pelo menos uma deve ser verdadeira  para retornar verdadeiro
! - not  -> não - inverte a saida (se true torna false e vise-versa)
*/

const expressaoAND = true && true;

console.log(expressaoAND);

const expressaoOR = true || false;

console.log(expressaoOR);

const expressaoNOT = !(false && false);

console.log(expressaoNOT);

const usuario = "Otávio";

const senha = "123456";

const login = usuario === "Otávio" && senha === "123456"; // Uma comparação lógica de login de usuário simples

console.log(login);

