const alunos = ["luiz", "maria", "joão" ];


console.log(alunos);

console.log(alunos[0]);

console.log(alunos.toString().charAt(9));

alunos[0] = "Carlos";

alunos[3] = "Nissan";

alunos[alunos.length] = "Dardos";

alunos[alunos.length] = "Darius";

alunos[alunos.length] = "Kassadin"; 

alunos.push("mateus");

console.log(alunos);

alunos.unshift("FFFabio");

const saida = alunos.pop();

const entrada = alunos.shift();

console.log(alunos.length);

delete alunos[0];

console.log(saida);

console.log(entrada);

console.log(alunos);

console.log(alunos.length);

console.log(alunos.slice(0, 5));

console.log(alunos.slice( 5));

console.log(alunos.slice(-3));

console.log(typeof(alunos), alunos instanceof Array);