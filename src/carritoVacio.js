  
function carritoVacio() {
    // verificar si el carrito esta vacio
  const carritoVacio = document.createElement("div");

  if(carrito.length === 0) {
    carritoVacio.innerHTML = `<div class="carrito-vacio">
                                <h2>Carrito Vacio!</h2>
                                <a class="btnAgregar" href="#index.html">Agregar productos</a>
                              </div>`
    contenedorPedido.appendChild(carritoVacio)

    // volver al index
    const btnAgregar = document.querySelector(".btnAgregar");
    btnAgregar.addEventListener("click", () => {
      contenedorPedido.innerHTML = '';
      contenedorPedido.style.display = "none";
    });
  }
}
 