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

    return contenedorHamburguesa;
}

const x = funcionalidadHamburguesa();

// agrega categorias 

const categorias = [];

function estableceCatalogo () {
  
  let id = 0;
  
  catalogo.forEach( prod => {
      if(!categorias.find(catego => catego.categoria === prod.categoria)) {
        categorias.push({categoria: prod.categoria, img: prod.imagen, id: id})
      }
      id++;
  })
  
  console.log(categorias)
  return categorias;
}

estableceCatalogo();

const carrito = [];

// agrega categorias al menu
const contenedorProductos = document.querySelector(".contenedor-productos");

function agregarCategoriasMenu() {
    const contCategoria = document.querySelector(".categoria");

    categorias.forEach( prod => {
      const categoriaInfo = document.createElement("a");
      categoriaInfo.href = "#";
      categoriaInfo.id = `id-${prod.id}`
      categoriaInfo.classList.add("titulo-categoria");
      categoriaInfo.innerHTML = `- ${prod.categoria}`;
      contCategoria.appendChild(categoriaInfo);
    
      const btnId = document.querySelector(`#id-${prod.id}`);
    
      // Funcionalidad botones del menu
      btnId.addEventListener("click", function() {
        
        contenedorProductos.style.display = "block"

        x.style.display = "none";

        // agregaProductosCategoria
        let contadorID = 0; 

        function agregarProductosCategoria() {
          let codificarCategoria = categorias[prod.id].categoria;
        
          const mostrarProductos = catalogo.filter(prod => prod.categoria === codificarCategoria);
        
          console.log(`click ${prod.id}`);
        
          // Asignar un ID único a los productos filtrados
          const productosConID = mostrarProductos.map(prod => ({ ...prod, id: contadorID++ }));
        
          return productosConID;
        }
        
        const producto = agregarProductosCategoria();

        // crea cabecera categoria 
        const headerCategoDom = document.createElement("div");
        headerCategoDom.classList.add("cont-categoria");
        headerCategoDom.innerHTML = `
          <h2>${prod.categoria}</h2>
          <button class="btn-cerrar-categoria" type="button">X</button>
        `
        contenedorProductos.appendChild(headerCategoDom);
        
        //muestra los productos en el dom
        function muestraCategoriasMenu() {} {

          const contProductos = document.createElement("div");
          contProductos.classList.add("cont-productos");

          contenedorProductos.appendChild(contProductos);

          producto.forEach(p => {
            const contProducto = document.createElement("div");
            contProducto.classList.add("card-producto");

            contProducto.innerHTML += `

                <img class="card-img"src="assets/img/productos-img/${p.imagen}.jpg" alt="pestañas y cejas"> 
                <h2>${p.nombreProducto}</h2>
                <p>$${p.precio}.00 </p>
                <div>
                  <input type="number" value="1" id="cant-${p.id}">
                  <button type="button" id="id-${p.id}">Agregar</button> 
                   
                </div>

            `
            
            contProductos.appendChild(contProducto);
            contenedorProductos.style.border = '1px solid #8080805e';

            const btnAgregarCarrito = contProductos.querySelector(`#id-${p.id}`);

            btnAgregarCarrito.addEventListener('click', function() {

              const cantidad = parseInt(contProductos.querySelector(`#cant-${p.id}`).value);
             
              if (!isNaN(cantidad) && cantidad > 0) {
                // Verificar si el producto ya está en el carrito
                const productoExistente = carrito.some(item => item.id === p.id);
            
                productoExistente
                  ? carrito.forEach(item => {
                      if (item.id === p.id) {
                        item.cantidad += cantidad;
                      }
                    })
                  : carrito.push({ ...p, cantidad });
            
                console.log(carrito);
              }

            })

          })
        }
        
        muestraCategoriasMenu();
        
        // cerrar cabecera categoria
        const btnCerrarCatego = document.querySelector(".btn-cerrar-categoria");
        btnCerrarCatego.addEventListener("click", function() {
          contenedorProductos.innerHTML = '';
          contenedorProductos.style.border = 'none';
          contenedorProductos.style.display = "none"
        })

      })

    })    
}

agregarCategoriasMenu();

const contCategorias = document.querySelector(".cont-principal-categorias");

categorias.forEach(prod => {

    const cardCategoria = document.createElement("div");
    cardCategoria.classList.add("card-categoria")

    cardCategoria.innerHTML = `
        <h2>${prod.categoria}</h2>
        <img src="assets/img/productos-img/${prod.img}.jpg" alt="${prod.categoria}">
        <button type="submit" id="id-${prod.id}">Ver mas</button>
    `
    contCategorias.appendChild(cardCategoria);
    
    const btnId = cardCategoria.querySelector(`#id-${prod.id}`);

    btnId.addEventListener('click', function() {
      
      contenedorProductos.style.display = "block"

      const x = funcionalidadHamburguesa();

      // agregaProductosCategoria
      function agregarProductosCategoria () {
        let codificarCategoria = categorias[prod.id].categoria;

        const mostrarProductos = catalogo.filter(prod => prod.categoria ===  codificarCategoria)

        console.log(`click ${prod.id}`)

        return mostrarProductos;
      }
      
      const producto = agregarProductosCategoria();

      // crea cabecera categoria 
      const headerCategoDom = document.createElement("div");
      headerCategoDom.classList.add("cont-categoria");
      headerCategoDom.innerHTML = `
        <h2>${prod.categoria}</h2>
        <button class="btn-cerrar-categoria" type="button">X</button>
      `
      contenedorProductos.appendChild(headerCategoDom);
      
  
      //muestra los productos en el dom
      function muestraCategoriasMenu() {} {

      const contProductos = document.createElement("div");
      contProductos.classList.add("cont-productos");

      contenedorProductos.appendChild(contProductos);

      producto.forEach(p => {
        const contProducto = document.createElement("div");
        contProducto.classList.add("card-producto");

        contProducto.innerHTML += `

            <img class="card-img"src="assets/img/productos-img/${p.imagen}.jpg" alt="pestañas y cejas"> 
            <h2>${p.nombreProducto}</h2>
            <p>$${p.precio}.00 </p>
            <div>
              <input type="number" value="1" id="cant-${p.id}">
              <button type="button" id="id-${p.id}">Agregar</button> 
                
            </div>

        `
        
        contProductos.appendChild(contProducto);
        contenedorProductos.style.border = '1px solid #8080805e';

        const btnAgregarCarrito = contProductos.querySelector(`#id-${p.id}`);

        btnAgregarCarrito.addEventListener('click', function() {

          const cantidad = parseInt(contProductos.querySelector(`#cant-${p.id}`).value);
          
          if (!isNaN(cantidad) && cantidad > 0) {
            // Verificar si el producto ya está en el carrito
            const productoExistente = carrito.some(item => item.id === p.id);
        
            productoExistente
              ? carrito.forEach(item => {
                  if (item.id === p.id) {
                    item.cantidad += cantidad;
                  }
                })
              : carrito.push({ ...p, cantidad });
        
            console.log(carrito);
          }

        })

      })
      }
      
      muestraCategoriasMenu();
      
      muestraCategoriasMenu();
      
      // cerrar cabecera categoria
      const btnCerrarCatego = document.querySelector(".btn-cerrar-categoria");
      btnCerrarCatego.addEventListener("click", function() {
        contenedorProductos.innerHTML = '';
        contenedorProductos.style.border = 'none';
        contenedorProductos.style.display = "none"
      })

    })

});

