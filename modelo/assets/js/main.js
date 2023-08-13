

// const resultado = document.querySelector("#resultado");

// const data = new Date();

// const diaSemana = data.getDay();

// const mes = data.getMonth();

// function getDayWeek (diaSemana){
//     let diaSemanaTexto;

// switch(diaSemana){
//     case 0:
//         diaSemanaTexto = "Domingo";
//         return diaSemanaTexto;
//     case 1:
//         diaSemanaTexto = "Segunda";
//         return diaSemanaTexto;
//     case 2:
//         diaSemanaTexto = "Terça";
//         return diaSemanaTexto;
//     case 3:
//         diaSemanaTexto = "Quarta";
//         return diaSemanaTexto;
//     case 4:
//         diaSemanaTexto = "Quinta";
//         return diaSemanaTexto;
//     case 5:
//         diaSemanaTexto = "Sexta";
//         return diaSemanaTexto;
//     case 6:
//         diaSemanaTexto = "Sabado";
//         return diaSemanaTexto;
//     default:
//         diaSemanaTexto = "Não reconhecido ";
//         return diaSemanaTexto;

// }
// }

// function getMonthYear (mes){
//     let mesTexto;

// switch(mes){
//     case 0:
//         mesTexto = "Janeiro";
//         return mesTexto;
//     case 1:
//         mesTexto = "Fevereiro";
//         return mesTexto;
//     case 2:
//         mesTexto = "Março";
//         return diaSemanaTexto;
//     case 3:
//         diaSemanaTexto = "Abril";
//         return mesTexto;
//     case 4:
//         mesTexto = "Maio";
//         return mesTexto;
//     case 5:
//         mesTexto = "Junho";
//         return mesTexto;
//     case 6:
//         mesTexto = "Julho";
//         return mesTexto;
//     case 7:
//         mesTexto = "Agosto";
//         return mesTexto;
//     case 8:
//         mesTexto = "Setembro";
//         return mesTexto;
//     case 9:
//         mesTexto = "Outubro";
//         return mesTexto;
//     case 10:
//         mesTexto = "Novembro";
//         return mesTexto;
//     case 11:
//         mesTexto = "Dezembro";
//         return mesTexto;
//     default:
//         mesTexto = "Não reconhecido ";
//         return mesTexto;
// }
// }

// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// const diaSemanaTexto = getDayWeek(diaSemana);

// const mesTexto = getMonthYear(mes);

// resultado.innerHTML = `<p>${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} <br> ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}</p>`


// exercicio feito solo, a seguir o metodo mais simples

// const resultado = document.querySelector("#resultado");

// const data = new Date();

// const opcoes = {
//     dateStyle: "full",
//     timeStyle: "short"
// };

// resultado.innerHTML = `<p>${data.toLocaleString("pt-BR", opcoes)}</p>`;


// forma com arrays

function mesArray(mes){
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return meses[mes];
}

function semanaArray(semana){
    const semanas = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado"];
    return semanas[semana];
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

const resultado = document.querySelector("#resultado");

const data = new Date();

resultado.innerHTML = `<p> ${semanaArray(data.getDay())}, ${data.getDate()} de ${mesArray(data.getMonth())} de ${data.getFullYear()} <br> ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())} </p>`;