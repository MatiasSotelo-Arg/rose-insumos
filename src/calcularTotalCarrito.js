// function calcularTotalCarrito () {

//     const contenedor = document.querySelector(".contenido-carrito")

//     const totalCarrito = carrito.reduce((acumulador, elemento) => {
//         return acumulador + elemento.precioTotal;
//     }, 0)

//     // mostrar el total en el contenedor
//     const carritoTotal = document.createElement("div");
//     carritoTotal.classList.add("carrito-total");

//     carritoTotal.innerHTML = (`
//                                 <div class="totalCarrito">
//                                     <h3>Total: $${totalCarrito}.00</h3>
//                                 </div>
//                                 `);

//     contenedor.appendChild(carritoTotal)
// }

function calcularTotalCarrito() {
    const contenedor = document.querySelector(".contenido-carrito");
    const totalCarrito = carrito.reduce((acumulador, elemento) => {
        return acumulador + elemento.precioTotal;
    }, 0);

    // Verificar si el contenedor carritoTotal ya existe
    let carritoTotal = document.querySelector(".carrito-total");
    if (carritoTotal) {
        // Limpiar el contenido del contenedor si ya existe
        carritoTotal.innerHTML = "";
    } else {
        // Crear el contenedor carritoTotal si no existe
        carritoTotal = document.createElement("div");
        carritoTotal.classList.add("carrito-total");
        contenedor.appendChild(carritoTotal);
    }

    // Mostrar el total en el contenedor
    carritoTotal.innerHTML = `
        <div class="totalCarrito">
            <h3>Total: $${totalCarrito}.00</h3>
        </div>
    `;

    if(carrito.length === 0) {
        carritoTotal.innerHTML = "";
        carritoVacio()
    }
}
