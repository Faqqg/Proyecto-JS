const productos = [
    { nombre: "Gaseosa", precio: 2500 },
    { nombre: "Cerveza", precio: 3200 },
    { nombre: "Galletitas", precio: 1200 },
    { nombre: "Hamburguesa", precio: 4500 }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let productoSeleccionado = null;

function restar(dinero, precioProducto) {
    return dinero - precioProducto;
}

function mostrarFormulario(numeroProducto) {
    productoSeleccionado = productos[numeroProducto - 1];
    document.getElementById('formulario-compra').style.display = 'block';
}

document.getElementById('comprar').addEventListener('click', () => {
    const nombreUsuario = document.getElementById('nombre-usuario').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const dinero = parseInt(document.getElementById('dinero').value);

    if (dinero < productoSeleccionado.precio * cantidad) {
        alert("El dinero ingresado no es suficiente para comprar estos productos, por favor seleccione otro.");
        return;
    }

    const cambio = restar(dinero, productoSeleccionado.precio * cantidad);
    
    document.getElementById('mensaje-cambio').style.display = 'block';
    document.getElementById('cambio').textContent = `Cambio a devolver: $${cambio}`;

    const fechaCompra = new Date();
    const productoComprado = { ...productoSeleccionado, comprador: nombreUsuario, cantidad: cantidad, fechaCompra: fechaCompra.toLocaleDateString() };
    carrito.push(productoComprado);

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();

    document.getElementById('formulario-compra').style.display = 'none';
    document.getElementById('nombre-usuario').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('dinero').value = '';
});

document.getElementById('limpiar-carrito').addEventListener('click', () => {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
});

function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    carrito.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'carrito-item';
        productoDiv.textContent = `Producto: ${producto.nombre}, Cantidad: ${producto.cantidad}, Comprador: ${producto.comprador}, Fecha de Compra: ${producto.fechaCompra}`;
        carritoDiv.appendChild(productoDiv);
    });
}

actualizarCarrito();
