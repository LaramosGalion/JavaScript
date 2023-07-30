const num = 10;

if (num >= 0 && num <=5){
    console.log("está entre 0 até 5")
}else if(num > 5 && num <= 10){
    console.log("está acima de 5 até 10");
}else{
    console.log("não está nas faixas de 0 a 10");
};

if(true){
    console.log("literal");
};

// Na primeira condição verdadeira o bloco condicional ira executar o codigo que está dentro da condição verdadeira e o bloco será encerrado (relembrando que o codigo é executado de cima para baixo e da esquerda para direita), assim se existirem outras condições verdadeiras elas serão ignoradas. Nisso é bom configurar uma order de prioridades quando se tem multiplas funções o mesmo bloco condicional.
// Ex: se cor do header for azul faça isso, mas no mesmo bloco tiver algo como se o body tiver width de 500px faça isso.
// Idealmente e bom isolar itens nesses casos para que não ocorra erros de prioridades e eles se misturem, assim tendo blocos condicionais isolados 