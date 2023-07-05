let num = prompt(`Digite um número: `);

const numeroTitulo = document.getElementById("numero_titulo");

const texto = document.getElementById("texto");

num = Number(num);

numeroTitulo.innerHTML = num;

texto.innerHTML = ""; 

texto.innerHTML += `<p>A raiz quadrada do número é: ${Math.sqrt(num)}</p>`;

texto.innerHTML += `<p>${num} é inteiro?: ${Number.isInteger(num)}</p>`;

texto.innerHTML += `<p>${num} é NaN?: ${Number.isNaN(num)}</p>`;

texto.innerHTML += `<p>${num} arrendondado para baixo é: ${Math.floor(num)}</p>`;

texto.innerHTML += `<p>${num} arrendondado para cima é: ${Math.ceil(num)}</p>`;

texto.innerHTML += `<p>${num} com duas casas decimais é: ${num.toFixed(2)}</p>`; 
