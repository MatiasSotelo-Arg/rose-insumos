// funcionalidad hamburguesa 
function funcionalidadHamburguesa () {

    // hamburguesa
    const contenedorHamburguesa = document.querySelector(".contenido-hamburguesa");
    const btnHamburguesa = document.querySelector("#btn-hamburguesa");
    const btnCerrarHamburguesa = document.querySelector(".btn-cerrar-hambur");

    // carrito
    const contenedorCarrito = document.querySelector(".contenido-carrito");
    const btnCarrito = document.querySelector("#btn-carrito");
    const btnCerrarCarrito = document.querySelector(".btn-cerrar-carrito");

    function toggleContenedor(contenedor, btnAbrir, btnCerrar) {
        btnAbrir.addEventListener('click', () => contenedor.style.display = "flex");
        btnCerrar.addEventListener('click', () => contenedor.style.display = "none");
      }
    
    toggleContenedor(contenedorHamburguesa, btnHamburguesa, btnCerrarHamburguesa);
    toggleContenedor(contenedorCarrito, btnCarrito, btnCerrarCarrito);

}

funcionalidadHamburguesa();

// agrega categorias 
const categoria = ["Pestañas","Uñas","Maquillaje","Organizador","Maquinas"];

function agregarCategorias() {
    const contCategoria = document.querySelector(".categoria");

    categoria.forEach( prod => {
      const categoriaInfo = document.createElement("a");
      categoriaInfo.href = "#";
      categoriaInfo.classList.add("titulo-categoria");
      categoriaInfo.innerHTML = `- ${prod}`;
      contCategoria.appendChild(categoriaInfo);
    })    
}

agregarCategorias();