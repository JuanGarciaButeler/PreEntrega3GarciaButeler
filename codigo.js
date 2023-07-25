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


function Productos(nombre, precio, foto) {
    this.nombre = nombre;
    this.precio = precio;
    this.foto = foto;
}

const productosArray = []
productosArray.push(producto1 = new Productos("Bicicleta Bmx Drb Highway", 180000, "https://http2.mlstatic.com/D_NQ_NP_927589-MLA50910922006_072022-F.webp")) 
productosArray.push(producto1 = new Productos("Bicicleta Bmx Drb Highway 2", 75000, "https://http2.mlstatic.com/D_NQ_NP_927589-MLA50910922006_072022-F.webp")) 
productosArray.push(producto1 = new Productos("Bicicleta Bmx Drb Highway 3", 48000, "https://http2.mlstatic.com/D_NQ_NP_927589-MLA50910922006_072022-F.webp")) 
productosArray.push(producto1 = new Productos("Bicicleta Bmx Drb Highway 4", 250000, "https://http2.mlstatic.com/D_NQ_NP_927589-MLA50910922006_072022-F.webp")) 
productosArray.push(producto1 = new Productos("Bicicleta Bmx Drb Highway 5", 750000, "https://http2.mlstatic.com/D_NQ_NP_927589-MLA50910922006_072022-F.webp")) 
productosArray.push(producto1 = new Productos("Bicicleta Bmx Drb Highway 6", 98410, "https://http2.mlstatic.com/D_NQ_NP_927589-MLA50910922006_072022-F.webp")) 
productosArray.push(producto1 = new Productos("Bicicleta Bmx Drb Highway 7", 99999, "https://http2.mlstatic.com/D_NQ_NP_927589-MLA50910922006_072022-F.webp")) 



    let foo = productosArray.map(function(producto){
        return 'div' +producto.nombre+' '+producto.precio+'div'
    })
    console.log(foo)
    
    function funcionLlamar(){
        window.onload

    }
funcionLlamar()



/*
const precioMinimo = document.getElementById("precioMinimo")

const precioMaximo = document.getElementById("precioMaximo")

const lista = document.getElementById("tiendaProductos")

const productos = lista.getElementById("dataset")

function limites() {
    const pminimo = parseFloat(precioMinimo.value) 
    
    const pmaximo = parseFloat(precioMaximo.value)
    
    for(let i = 0; i<productos.length; i++){
        const precioProducto = parseFloat(productos[i].dataset.price)
        console.log(precioProducto)
    } 
}
limites()*/