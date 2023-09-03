// for - estrutura de repetição
// i - index

// dentro dos parenteses primeiramente se atribui uma variavel, depois aplica uma condicional e posteriormente o incremento da variavel, essas etapas são separadas por ";"

// for (let i = 10; i <= 50; i ++){

//     const par = i % 2 == 0;
//     if (par){
//         console.log(`O valor de ${i} é par`);
//     }
    
// }

const frutas = ["maça", "banana", "uva"]

for(let i = 0; i < frutas.length; i++){
    console.log(`indice ${i}`,frutas[i]);
}