// Date é uma função construtora, para ela ser usada ela tem que ter um pre-termo new
// Date dara a data atual completa

const tresHoras = 60**2 * 3000;

const data = new Date(0 + tresHoras);

console.log(data.toString());

const dataGet = new Date();

console.log("Dia",data.getDate());
console.log("Mes",data.getMonth());
console.log("Ano",data.getFullYear());
console.log("Horas",data.getHours());
console.log("Minutos",data.getMinutes());
console.log("Segundos",data.getSeconds());
console.log("Mile segundos",data.getMilliseconds());
console.log("Dia da semana",data.getDay());

console.log(Date.now());

const dataNova = new Date(1691364658647);

console.log(dataNova);

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const horas = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} - ${horas}:${minutos}:${segundos}`;
};

const dataBrasil = formataData(dataGet);

console.log(dataBrasil)
