function calcularTotalCarrito() {
    const contenedor = document.querySelector(".contenido-carrito");
    const totalCarrito = carrito.reduce((acumulador, elemento) => {
        return acumulador + elemento.precioTotal;
    }, 0);

    // Verificar si el contenedor carritoTotal ya existe
    let carritoTotal = document.querySelector(".carrito-total");
    
    if (carritoTotal) {
        carritoTotal.innerHTML = "";
    } else {
        carritoTotal = document.createElement("div");
        carritoTotal.classList.add("carrito-total");
        contenedor.appendChild(carritoTotal);
    }

    carritoTotal.innerHTML = `
        <div class="totalCarrito">
            <h3>Total: $${totalCarrito}.00</h3>
        </div>
    `;

    // limpiar contenido carrito
    let contConfirmarCompra = document.querySelector(".confirmar-compra")

    if(carrito.length === 0) {
        carritoTotal.innerHTML = "";
        if(contConfirmarCompra) {
            contConfirmarCompra.remove()
        } 
        carritoVacio()
    } else if (!contConfirmarCompra) {
        confirmarCompra();
    }
}

