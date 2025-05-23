const nombre= document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const altura = document.getElementById("altura");
const correo = document.getElementById("correo");
const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

btn.addEventListener("click",formulario);

function formulario(){
    let errores = [];

    if(nombre.value === "" || nombre.value.length > 50) {
    errores.push("Por favor ,ingrese nombre que no supere los 50 caracteres.");
}
    if (apellido.value === "" || apellido.value.length > 50){
    errores.push("Por favor,ingrese apellido que no supere los 50 caracteres")
}
    if(edad.value<0){
        errores.push("La edad no puede ser negativa")
    }else if (edad.value <18){
        errores.push("su edad debe ser mayor de 18 ");
    }
    if (altura.value < 0 || altura.value > 230) {
        errores.push("La altura debe estar entre 0 y 230 cm.");
    }
    if(correo.value === "" || !correo.value.includes ("@")){
        errores.push("El correo electronico es invalido");
    }
    if (errores.length === 0 ){
        mensaje.textContent = "todos los datos son correctos"
        mensaje.style.color = "green"
    } else {
        mensaje.textContent = errores.join(" ");
        mensaje.style.color = "red";
    }

}