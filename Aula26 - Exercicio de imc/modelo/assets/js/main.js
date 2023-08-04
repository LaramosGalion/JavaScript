    
function imc(){

    const formulario = document.querySelector("#form");

    const resultado = document.querySelector("#resultado");

    function enviar(evento){
        evento.preventDefault();

        const peso = formulario.querySelector(".peso");
;
        const altura = formulario.querySelector(".altura");

        if(altura.value == 0 || peso.value == 0){
            return resultado.innerHTML = `<p>Peso ou altura invalidos</p>`;
        }

        const imc = (peso.value / (altura.value**2)).toFixed(2);

        if (imc < 18.5){
            console.log(1);
             return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Abaixo do peso)</p>`;
        }else if(imc >= 18.5 && imc < 25){
            console.log(2);
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Peso normal)</p>`;
        }else if(imc >= 25 && imc < 30 ){
            console.log(3);
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Sobrepeso)</p>`;
        }else if(imc >= 30 && imc < 35 ){
            console.log(4);
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Obesidade grau 1)</p>`;
        }else if(imc >= 35 && imc < 40 ){
            console.log(5);
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Obesidade grau 2)</p>`;
        }else if(imc >= 40 ){
            console.log(6);
            return resultado.innerHTML = `<p>Seu IMC é de ${imc} (Obesidade grau 3)</p>`;
        };
    }

    formulario.addEventListener("submit", enviar);

}


imc();