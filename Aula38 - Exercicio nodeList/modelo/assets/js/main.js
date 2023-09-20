const paragrafos = document.querySelector(".paragrafos");

const ps = paragrafos.querySelectorAll("p");
// recebe todos os valores que está dentro da variavel funcionando de forma similar a um array

const estilosBody = getComputedStyle(document.body);
// recebe os estilos computados dentro do elemento selecionado

const backBody = estilosBody.backgroundColor;
// recebe somente a cor de fundo do body

for(let p of ps){
    p.style.backgroundColor = backBody;
    p.style.color = "white"
}