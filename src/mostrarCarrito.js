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

  carritoVacio();
  
  // Mostrar pedido en carrito
  carrito.forEach(prod => {

    const cardPedido = document.createElement("div");
    cardPedido.classList.add("card-carrito", prod.id);
  
    let precioTotal = prod.precio * prod.cantidad;

    cardPedido.innerHTML = `
      <img class="card-img-carrito" src="assets/img/productos-img/${prod.imagen}.jpg" alt="${prod.nombreProducto}">
        <h2>${prod.nombreProducto}</h2>
        <strong>${prod.cantidad} x $${precioTotal}</strong>
      <input id="id-${prod.id}" type="submit" value="X" class="btnXPedido">
    `;
  
    const btnSacarPedido = cardPedido.querySelector(`#id-${prod.id}`);
  

  // btn cerrar
  btnSacarPedido.addEventListener('click', function() {
    const indice = carrito.findIndex(elemento => elemento.id === prod.id);
    if (indice !== -1) {
      carrito.splice(indice, 1);
      console.log(`Elemento con ID ${prod.id} eliminado del pedido.`);

      // Eliminar el elemento del DOM
      cardPedido.remove();
    }
  });
  
    contenedorPedido.appendChild(cardPedido);

  });

  // btnCerrar
const btnCerrar = document.querySelector(".btn-cerrar-carrito");

btnCerrar.addEventListener("click", function(){
  contenedorPedido.innerHTML = '';
  contenedorPedido.style.display = "none"
})
})

