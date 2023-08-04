
function  dados(){

    const form = document.querySelector(".form");

    const resultado = document.querySelector(".resultado");

    const listaPessoas = [];

    // form.onsubmit = function(evento){
    //     evento.preventDefault();
    //     console.log("Evento previnido");
    // };

    function recebeEvento(evento){
        evento.preventDefault();
         
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        // Começo do exercicio

        const pessoa = {
            nome:nome.value, 
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value,
        };

        listaPessoas.push(pessoa);

        console.log(listaPessoas);

        return resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`;
        
    }

    form.addEventListener("submit", recebeEvento)

}

dados();