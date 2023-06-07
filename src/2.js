const carrito = [];

// Funcionalidad hamburguesa 
function funcionalidadHamburguesa() {
  // Hamburguesa
  const contenedorHamburguesa = document.querySelector(".contenido-hamburguesa");
  const btnHamburguesa = document.querySelector("#btn-hamburguesa");
  const btnCerrarHamburguesa = document.querySelector(".btn-cerrar-hambur");

  // Carrito
  const contenedorCarrito = document.querySelector(".contenido-carrito");
  const btnCarrito = document.querySelector("#btn-carrito");
  const btnCerrarCarrito = document.querySelector(".btn-cerrar-carrito");

  function toggleContenedor(contenedor, btnAbrir, btnCerrar) {
    btnAbrir.addEventListener('click', () => contenedor.style.display = "flex");
    btnCerrar.addEventListener('click', () => contenedor.style.display = "none");
  }

  toggleContenedor(contenedorHamburguesa, btnHamburguesa, btnCerrarHamburguesa);
  toggleContenedor(contenedorCarrito, btnCarrito, btnCerrarCarrito);

  return contenedorHamburguesa;
}

const x = funcionalidadHamburguesa();

// Agrega categorías 
const categorias = [];

function estableceCatalogo() {
  let id = 0;

  catalogo.forEach(prod => {
    if (!categorias.find(catego => catego.categoria === prod.categoria)) {
      categorias.push({ categoria: prod.categoria, img: prod.imagen, id: id });
      id++;
    }
  });

  console.log(categorias);
}

estableceCatalogo();

// Agrega categorías al menú
const contenedorProductos = document.querySelector(".contenedor-productos");

function agregarCategoriasMenu() {
  const contCategoria = document.querySelector(".categoria");

  categorias.forEach(prod => {
    const categoriaInfo = document.createElement("a");
    categoriaInfo.href = "#";
    categoriaInfo.id = `id-${prod.id}`;
    categoriaInfo.classList.add("titulo-categoria");
    categoriaInfo.innerHTML = `- ${prod.categoria}`;
    contCategoria.appendChild(categoriaInfo);

    const btnId = document.querySelector(`#id-${prod.id}`);

    btnId.addEventListener("click", function () {
      contenedorProductos.style.display = "block";
      x.style.display = "none";

      contenedorProductos.innerHTML = `
        <div class="cont-categoria">
          <h2>${prod.categoria}</h2>
          <button class="btn-cerrar-categoria" type="button">X</button>
        </div>
        <div class="cont-productos">
        </div>
      `;

      const contProductos = document.querySelector(".cont-productos");

      const productos = catalogo.filter(p => p.categoria === prod.categoria);

      productos.forEach(p => {
        const contProducto = document.createElement("div");
        contProducto.classList.add("card-producto");

        contProducto.innerHTML = `
          <img class="card-img" src="assets/img/productos-img/${p.imagen}.jpg" alt="pestañas y cejas"> 
          <h2 class="card-titulo">${p.nombreProducto}</h2>
          <p>$${p.precio}.00</p>
          <div>
            <input type="number" value="1" id="cant-${p.id}">
            <button type="button" id="agregar-${p.id}">Agregar</button> 
          </div>
        `;

        contProductos.appendChild(contProducto);

        const btnAgregarCarrito = contProducto.querySelector(`#agregar-${p.id}`);

        btnAgregarCarrito.addEventListener('click', function () {
          const cantidad = parseInt(contProducto.querySelector(`#cant-${p.id}`).value);

          if (!isNaN(cantidad) && cantidad > 0) {
            const productoExistente = carrito.find(item => item.id === p.id);

            if (productoExistente) {
              productoExistente.cantidad += cantidad;
            } else {
              carrito.push({ ...p, cantidad });
            }

            console.log(carrito);

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Producto Agregado!',
              showConfirmButton: false,
              timer: 700
            });

            mostrarProductosCarrito();
          }
        });
      });

      const btnCerrarCatego = document.querySelector(".btn-cerrar-categoria");
      btnCerrarCatego.addEventListener("click", function () {
        contenedorProductos.innerHTML = '';
        contenedorProductos.style.display = "none";
      });
    });
  });
}

agregarCategoriasMenu();


