let usuario = prompt("ingrese su nombre de usuario")
let usuarioValidado = "Juan Garcia"
let codigoPromocional = [1234, 7654, 098, 34, 5]

while (usuario != usuarioValidado){
    alert( "No se encontro el nombre de usuario")
    usuario = prompt("Ingrese nuevamente el usuario")
}

if (usuario = usuarioValidado){
    alert("Hola " + usuarioValidado)
}

function validarCodigoPromocional ( codigoDeUsuario,codigoPromocional){
    let flag = false
    for (let index = 0;  index < codigoPromocional.length; index++) {
        console.log(codigoDeUsuario)
        if (codigoDeUsuario == codigoPromocional[index]){
            flag = true
        }else{
            flag = false
        }
    }
    return flag
}

let codigoDeUsuario = prompt("Ingrese codigo de usuario promocional")
let validacion = validarCodigoPromocional (codigoDeUsuario, codigoPromocional)
if (validacion == false){
    alert("El codigo promocional no es valido")
}
if(validacion == true){
    alert("El codigo promocional es valido") 
}
