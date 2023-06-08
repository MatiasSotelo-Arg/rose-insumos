// mostrarPedidoEnCarrito
const contPedido = document.querySelector("#btn-carrito");
const contenedorPedido = document.querySelector(".contenido-carrito");
  

contPedido.addEventListener("click", function(){
  contenedorPedido.style.display = "block";

  // crea cabecera categoria 
  const headerCategoDom = document.createElement("div");
  headerCategoDom.classList.add("header-carrito");
  headerCategoDom.innerHTML = `
    <h3>Pedido</h3>
    <button class="btn-cerrar-carrito" type="button">X</button>
  `
  
  contenedorPedido.appendChild(headerCategoDom);
  
  // Mostrar pedido en carrito
  carrito.forEach(prod => {

    const cardPedido = document.createElement("div");
    cardPedido.classList.add("card-carrito", prod.id);

    cardPedido.innerHTML = `
      <div class="card-img-carrito">
        <img src="assets/img/productos-img/${prod.imagen}.jpg" alt="${prod.nombreProducto}">
      </div>
      <div class="card-info">
          <div>
            <h2>${prod.nombreProducto}</h2>
            <strong>${prod.cantidad} x $${prod.precioTotal}.00</strong> 
          </div>
          <input id="id-${prod.id}" type="submit" value="X" class="btnXPedido">
      </div>
    `;
  
    const btnSacarPedido = cardPedido.querySelector(`#id-${prod.id}`);
  

  // btnEliminarElementoCarrito
  btnSacarPedido.addEventListener('click', function() {
    const indice = carrito.findIndex(elemento => elemento.id === prod.id);
    if (indice !== -1) {
      carrito.splice(indice, 1);
      console.log(`Elemento con ID ${prod.id} eliminado del pedido.`);

      // Eliminar el elemento del DOM
      cardPedido.remove();
    }
    calcularTotalCarrito();
  });
  
    contenedorPedido.appendChild(cardPedido);

  });

  // btnCerrar
  const btnCerrar = document.querySelector(".btn-cerrar-carrito");

  btnCerrar.addEventListener("click", function(){
    contenedorPedido.innerHTML = '';
    contenedorPedido.style.display = "none"
  })

  calcularTotalCarrito();
})

