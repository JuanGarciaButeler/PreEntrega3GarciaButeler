let usuario = prompt("ingrese su nombre de usuario") 
let usuarioValidado = "Juan garcia"

while (usuario != usuarioValidado){
    alert( "No se encontro el nombre de usuario")
    usuario = prompt("Ingrese nuevamente el usuario")
}

if (usuario = usuarioValidado){
    alert("Hola " + usuarioValidado)    
}