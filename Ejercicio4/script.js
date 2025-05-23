const peso= document.getElementById("peso");
const estatura = document.getElementById("estatura");
const btn = document.getElementById("btn");


btn.addEventListener("click",imc);

function imc(){
    if(peso.value> 0 && estatura.value > 0){
        p = peso.value
        console.log(p)
        e = estatura.value
        I = (p/(e * e)).toFixed(2)
        alert('su imc es igual: '+I)
    } else {alert('ingrese valores positivos')
        peso.value = ''
        estatura.value = ''
    }
    
}