const calcular = documment.getElementBYId(`calcular`);

function imc(){
    const nome = document.getElementById(`nome`).value
    const altura = document.getElementById(`altura`).value
    const peso = document.getElementById(`peso`).value
    const resultado = document.getElementById(`resultado`);
}
    if(nome !==`` && altura !==`` && peso !==``){

         const valorIMC = (peso / (altura*altura)).toFixed(1);
         let classificacao =``;

         if(valorIMC <18.5){
            classificacao
         }


    }
 



