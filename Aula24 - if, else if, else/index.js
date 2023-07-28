const hora = 199 ;

if (hora > 0 && hora < 12){
    console.log("Bom dia");
}else if(12 <= hora && hora < 18){
    console.log("Boa tarde");
}else if( hora >=18 && hora <= 24){
    console.log("Boa noite");
}else{
    console.log("Olá");
};  

/*
If podem ser usados isoladamente
Sempre que se utiliza a palavra else houve um if anterior
Pode se ter varios else if na checagem
So se pode ter um else por checagem
Podesse usar condições sem else if, utilizando apenas if e else
*/