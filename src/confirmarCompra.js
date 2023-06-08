// let mensajeSaludo = "Hola mi pedido es:%0A%0A";
// let mensajeDetalle = "";
// let mensajeCompleto = "";
// let mensajeEnviado = false; // Variable para controlar si el mensaje ya se envió

// function confirmarCompra() {
//     const contenedor = document.querySelector(".contenido-carrito");

//     let btnConfirmarCompra = document.createElement("a");
//     btnConfirmarCompra.classList.add("confirmar-compra");
//     btnConfirmarCompra.textContent = "Confirmar Compra ✓"
//     btnConfirmarCompra.href = "#"

//     contenedor.appendChild(btnConfirmarCompra);

//     detalleCompra(btnConfirmarCompra);
// }

// function detalleCompra(btnConfirmar) {
//     btnConfirmar.addEventListener('click', () => {
    
//         if(!mensajeEnviado) {
//             mensajeDetalle = "";

//         carrito.forEach(prod => {
//             mensajeDetalle += `*${prod.nombreProducto}*%0A${prod.cantidad} x $${prod.precio} - subTotal: $${prod.precioTotal}%0A%0A`;
//         });

//         const obtenerTotal = obtenerTotalCarrito()

//         mensajeCompleto = `${mensajeSaludo}${mensajeDetalle}%0A%0ATotal: $${obtenerTotal}`;

//         console.log(mensajeCompleto);

//         Swal.fire({
//             position: 'center',
//             icon: 'success',
//             title: 'Pedido Confirmado!',
//             showConfirmButton: false,
//             timer: 500
//         })

//         mensajeEnviado = true; // Establecer la variable de mensajeEnviado a true para evitar el bucle de alertas
//         }
        
//         setTimeout(() => {
//         btnConfirmar.target = "_blank"
//         btnConfirmar.href = `https://api.whatsapp.com/send?phone=+549379480-1475&text=${mensajeCompleto}`;
//         btnConfirmar.click()
//         },700)
                 
//     });
// }

// function obtenerTotalCarrito() {
//     return totalCarrito = carrito.reduce((acumulador, elemento) => {
//         return acumulador + elemento.precioTotal;
//     }, 0);
// }

let mensajeSaludo = "Hola mi pedido es:%0A%0A";
let mensajeDetalle = "";
let mensajeCompleto = "";
let mensajeEnviado = false; // Variable para controlar si el mensaje ya se envió

function confirmarCompra() {
    const contenedor = document.querySelector(".contenido-carrito");

    let btnConfirmarCompra = document.createElement("a");
    btnConfirmarCompra.classList.add("confirmar-compra");
    btnConfirmarCompra.textContent = "Confirmar Compra ✓";
    btnConfirmarCompra.href = "#";

    contenedor.appendChild(btnConfirmarCompra);

    btnConfirmarCompra.addEventListener('click', () => {
        if (!mensajeEnviado) {
            mensajeDetalle = "";

            carrito.forEach(prod => {
                mensajeDetalle += `*${prod.nombreProducto}*%0A${prod.cantidad} x $${prod.precio} - subTotal: $${prod.precioTotal}%0A%0A`;
            });

            const obtenerTotal = obtenerTotalCarrito();

            mensajeCompleto = `${mensajeSaludo}${mensajeDetalle}Total: $${obtenerTotal}`;

            console.log(mensajeCompleto);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Pedido Confirmado!',
                showConfirmButton: false,
                timer: 500
            });

            mensajeEnviado = true; // Establecer la variable de mensajeEnviado a true para evitar el bucle de alertas

            setTimeout(() => {
                btnConfirmarCompra.target = "_blank";
                btnConfirmarCompra.href = `https://api.whatsapp.com/send?phone=+549379480-1475&text=${mensajeCompleto}`;
                btnConfirmarCompra.click();
            }, 700);
        }
    });
}

function obtenerTotalCarrito() {
    return totalCarrito = carrito.reduce((acumulador, elemento) => {
        return acumulador + elemento.precioTotal;
    }, 0);
}



