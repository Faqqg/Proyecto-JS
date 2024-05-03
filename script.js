function restar(dinero, precioProducto) {
    return dinero - precioProducto;
}

let producto1 = { nombre: "Gaseosa", precio: 2500 };
let producto2 = { nombre: "Cerveza", precio: 3200 };
let producto3 = { nombre: "Galletitas", precio: 1200 };
let producto4 = { nombre: "Hamburguesa", precio: 4500 };

let carrito = [];

let continuarComprando = true;

while (continuarComprando) {
    let nombreUsuario = prompt("Ingrese su nombre:");

    let pedido = parseInt(prompt(`Hola ${nombreUsuario}, ingrese el numero de los productos que desee comprar:
    1- Gaseosa  $${producto1.precio}
    2- Cerveza  $${producto2.precio}
    3- Galletitas $${producto3.precio}
    4- Hamburguesa $${producto4.precio}
    5- Salir
    `));

    let productoSeleccionado;

    switch (pedido) {
        case 1:
            productoSeleccionado = producto1;
            break;
        case 2:
            productoSeleccionado = producto2;
            break;
        case 3:
            productoSeleccionado = producto3;
            break;
        case 4:
            productoSeleccionado = producto4;
            break;
        case 5:
            continuarComprando = false;
            continue;
        default:
            alert("Producto no disponible");
            continue;
    }

    let cantidad = parseInt(prompt(`Ingrese la cantidad de ${productoSeleccionado.nombre} que desea comprar:`));

    let dinero = parseInt(prompt(`Ingresar el dinero con el que va a pagar`));

    if (dinero < productoSeleccionado.precio * cantidad) {
        alert("El dinero ingresado no es suficiente para comprar estos productos, por favor seleccione otro.");
        continue;
    }

    let cambio = restar(dinero, productoSeleccionado.precio * cantidad);
    alert("Cambio a devolver: " + cambio);

 
    let fechaCompra = new Date();
    productoSeleccionado.comprador = nombreUsuario; 
    productoSeleccionado.cantidad = cantidad; 
    productoSeleccionado.fechaCompra = fechaCompra.toLocaleDateString(); 
    carrito.push(productoSeleccionado);
}

console.log("Productos en el carrito:", carrito);
