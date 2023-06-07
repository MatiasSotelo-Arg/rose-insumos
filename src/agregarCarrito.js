function agregarCarrito (p) {
    // Agarrar producto al carrito

    const contProductos = document.querySelector(".cont-productos");
    const btnAgregarCarrito = contProductos.querySelector(`#id-${p.id}`);

    btnAgregarCarrito.addEventListener('click', function() {

      const cantidad = parseInt(contProductos.querySelector(`#cant-${p.id}`).value);
    
      if (!isNaN(cantidad) && cantidad > 0) {
        // Verificar si el producto ya está en el carrito
        const productoExistente = carrito.some(item => item.nombreProducto === p.nombreProducto);
    
        productoExistente
          ? carrito.forEach(item => {
              if (item.nombreProducto === p.nombreProducto) {
                item.cantidad += cantidad;
              }
            })
          : carrito.push({ ...p, cantidad });
    
        console.log(carrito);
      }

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto Agregado!',
        showConfirmButton: false,
        timer: 700
      })
      
    })
}