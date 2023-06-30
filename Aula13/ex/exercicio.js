let nome = prompt("Digite seu nome completo: ");
document.body.innerHTML = `O seu nome é: ${nome} <br>`;
document.body.innerHTML += `O seu nome tem: ${nome.length} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br>`;
document.body.innerHTML += `O primeiro indice "a" do seu nome é: ${nome.indexOf("a",0)} <br>`;
document.body.innerHTML += `O ultimo indice "a" do seu nome é: ${nome.lastIndexOf("a", (nome.length-1))} <br>`;
document.body.innerHTML += `O primeiro indice "a" do seu nome é: ${nome.indexOf("a")} <br>`;
document.body.innerHTML += `O ultimo indice "a" do seu nome é: ${nome.lastIndexOf("a")} <br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)} <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")} <br>`;
document.body.innerHTML += `O seu nome em letras maiúsculas: ${nome.toUpperCase()} <br>`;
document.body.innerHTML += `O seu nome em letras minúsculas: ${nome.toLowerCase()} <br>`;

// Não é necessario colocar o indice no lastIndex, nem no indexOf