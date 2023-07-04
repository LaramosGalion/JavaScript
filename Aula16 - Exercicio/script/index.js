let num = prompt(`Digite um número: `);

num = Number(num);

document.body.innerHTML = `A raiz quadrada do número é: ${Math.sqrt(num)} <br>`;
document.body.innerHTML += `${num} é inteiro?: ${Number.isInteger(num)} <br>`;
document.body.innerHTML += `${num} é NaN?: ${Number.isNaN(num)} <br>`;
document.body.innerHTML += `${num} arrendondado para baixo é: ${Math.floor(num)} <br>`;
document.body.innerHTML += `${num} arrendondado para cima é: ${Math.ceil(num)} <br>`;
document.body.innerHTML += `${num} com duas casas decimais é: ${Number(num.toFixed(2))} <br>`;
