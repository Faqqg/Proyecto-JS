function restar(dinero, precioProducto) {
    return dinero - precioProducto;
}

let producto1 = 2500;
let producto2 = 3200;
let producto3 = 1200;
let producto4 = 4500;

let continuarComprando = true;

while (continuarComprando) {
    let pedido = parseInt(prompt(`Ingrese el numero de los productos que desee comprar:
    1- Gaseosa  $${producto1}
    2- Cerveza  $${producto2}
    3- Galletitas $${producto3}
    4- Hamburguesa $${producto4}
    5- Salir
    `));

    let precioPedido;

    if (pedido === 1) {
        precioPedido = producto1;
    } else if (pedido === 2) {
        precioPedido = producto2;
    } else if (pedido === 3) {
        precioPedido = producto3;
    } else if (pedido === 4) {
        precioPedido = producto4;
    } else if (pedido === 5) {
        continuarComprando = false;
        continue;
    } else {
        alert("Producto no disponible");
        continue;
    }

    let dinero = parseInt(prompt(`Ingresar el dinero con el que va a pagar`));

    if (dinero < precioPedido) {
        alert("El dinero ingresado no es suficiente para comprar este producto, por favor seleccione otro.");
        continue;
    }

    let cambio = restar(dinero, precioPedido);
    alert("Cambio a devolver: " + cambio);
}

