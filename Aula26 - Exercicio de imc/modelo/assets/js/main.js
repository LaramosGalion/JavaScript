
function imc() {

    const formulario = document.querySelector("#form");

    const resultado = document.querySelector("#resultado_section");

    function enviar(evento) {
        evento.preventDefault(); // Prevenção do evento 

        console.log("prevenção do evento");

        const peso = Number(formulario.querySelector(".peso").value);

        const altura = Number(formulario.querySelector(".altura").value);

        console.log(typeof (altura), typeof (peso)); // Verificação do tipo

        if (altura == 0 || peso == 0) {
            resultado_section.style.background = "red";
            return resultado.innerHTML = `<p>Peso ou altura invalidos (Não é possivel utilizar zero como parâmetro)</p>`;

        } else if (Number.isNaN(altura) || Number.isNaN(peso)) {
            resultado_section.style.background = "red";
            return resultado.innerHTML = `<p>Peso ou altura invalidos (Digite apenas números)</p>`;

        }else{
            resultado_section.style.background = "var(--corBase)";
        }

        const imc = (peso / (altura ** 2)).toFixed(2);

        if (imc < 18.5) {
            console.log(1); // Verificação do resultado 
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Abaixo do peso)</p>`;
        } else if (imc >= 18.5 && imc < 25) {
            console.log(2); // Verificação do resultado
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Peso normal)</p>`;
        } else if (imc >= 25 && imc < 30) {
            console.log(3); // Verificação do resultado
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Sobrepeso)</p>`;
        } else if (imc >= 30 && imc < 35) {
            console.log(4); // Verificação do resultado
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Obesidade grau 1)</p>`;
        } else if (imc >= 35 && imc < 40) {
            console.log(5); // Verificação do resultado
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Obesidade grau 2)</p>`;
        } else if (imc >= 40) {
            console.log(6); // Verificação do resultado
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Obesidade grau 3)</p>`;
        };
    }

    formulario.addEventListener("submit", enviar); // Verifica quando um evento acontece e quando acontecer aciona a função

}

imc();

// inves de ter varios returns poderia se ter apenas um no final e nas condicionais modificar uma string que seria aplicada no return final