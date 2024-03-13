
// Función para actualizar el contenido del carrito
function actualizarCarrito() {
    // Obtiene los usuarios almacenados en el localStorage
    const usuariosStorage = localStorage.getItem("Usuarios");
   
    // Obtiene una referencia al elemento HTML con el id "carrito"
    const carritoElement = document.getElementById("carrito");
   
    // Limpia el contenido actual del carrito
    carritoElement.innerHTML = "";
   
    // Si hay usuarios almacenados, itera sobre cada uno
    if (usuariosStorage) {
      const usuarios = JSON.parse(usuariosStorage);
      usuarios.forEach(item => {
        // Crea un nuevo elemento <div> para mostrar la información del producto
        const div = document.createElement("div");
        div.innerHTML = `
          <div class="estructura">
            <h3 class="titulo-producto-carrito">Producto: ${item.Carrito}</h3>
            <p class="titulo-producto-carrito">Nombre: ${item.nombre}</p>
            <b class="precio-producto-carrito">Precio: ${item.Precio}</b>
          </div>`;
        // Agrega el elemento al carrito
        carritoElement.appendChild(div);
      });
    }
   }
   
   // Event listener para mostrar/ocultar el carrito al hacer clic en el ícono
   const btnCart = document.querySelector('.container-cart-icon');
   const containerCartProducts = document.querySelector('.container-cart-products');
   btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
   });
   
   // Event listener para agregar productos al carrito
   const Añadir = document.querySelectorAll(".btn-add-cart");
   Añadir.forEach(button => {
    button.addEventListener("click", () => {
      // Obtiene la lista de usuarios o crea una lista vacía
      let usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
      // Crea un objeto "producto" con información del botón clickeado
      const producto = {
        Carrito: usuarios.length + 1,
        nombre: button.parentElement.querySelector("h2").textContent,
        Precio: button.parentElement.querySelector(".price").textContent
      };
      // Agrega el producto a la lista de usuarios
      usuarios.push(producto);
      // Actualiza el localStorage con la lista de usuarios actualizada
      localStorage.setItem("Usuarios", JSON.stringify(usuarios));
      // Actualiza el carrito en la interfaz
      actualizarCarrito();
    });
   });
   
   // Llama a la función para inicializar el carrito
   actualizarCarrito();
   
   
  


   // Event listener para borrar todos los datos del localStorage
   const Borrar = document.getElementById("borrar");
   Borrar.addEventListener("click", () => {
    localStorage.clear();
    // Actualiza el carrito en la interfaz
    actualizarCarrito();
   });
   

// Registro con swettAlert2

let Enviar = document.getElementById("registro")

Enviar.addEventListener("click",(e)=>{
    e.preventDefault()
    Swal.fire({
        title: "Enviado",
        text: "Tu registro fue enviado con exito",
        icon: "success",
    });
})

// Iniciar Sesion con swettAlert2

let iniciarSesion = document.getElementById("iniciarSesion")

iniciarSesion.addEventListener("click",(e)=>{
    e.preventDefault()
    Swal.fire({
        title: "inicio de sesion",
        text: "Tu inicio de sesion a sido exitoso",
        icon: "success",
    });
})



// ACA ESTOY UTILIZANDO FETCH TRAYENDO DATOS DEDSDE UNA API



const Personal = document.getElementById("Personal")
 fetch("https://jsonplaceholder.typicode.com/users")
//  Tomando las promesas con .then
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const Div = document.createElement("div")
      // Dando una clase a los divs
      Div.className = ("card m-2 col-lg-5 ")
      // Creacion de divs
      Div.innerHTML = `
        <h4 class=""> ${item.name}</h4>
        <p>Usuario: ${item.username}</p>
        <p>Contacto: ${item.email}</p>
        `;

      Personal.append(Div);
    });
  });







// Intente de forma local pero no me sale por que no me aparece en el navegador(puse import haber si funcionaba y tampoco)

// const traerDatos = async () => {
//   try {
//       const response = await fetch(import("./data.json"));
//       const data = await response.json();
      
//       data.forEach((item) => {
//           const card = document.createElement("div");;
//           card.innerHTML = `
//         <h4 class=""> ${item.name}</h4>
//        <p>Usuario: ${item.username}</p>
//        <p>Contacto: ${item.email}</p>
//        <p>Contacto: ${item.contacto}</p>
//        `
//           Personal.append(card);
//       })
//       }
//       catch (error) {
//       console.log(error);
//   }
// };