// se verdadeiro ? 
// se falso :
// condição ? valor verdadeiro : valor falso;

const pontuacao = 999;

if (pontuacao >= 1000){
    console.log("Vip");
}else{
    console.log("Normal");
}

const nivelUsuario = pontuacao >= 1000 ? "Vip" : "Normal";

console.log(nivelUsuario)