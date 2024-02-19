const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});




// <<<<<<<<<<<<<<<<Se añade tocando el boton de zapatillas nike>>>>>>>>

const Usuarios = [
    {Carrito:1, nombre:"Zapatos Nike", Precio:"80$"}
]

localStorage.setItem("Usuarios",JSON.stringify(Usuarios))

// <<<<<<<<<<<<<<<<Se añade tocando el boton de zapatillas>>>>>>>>

// <<<<<<<<<<<<<<<<<<CREADOR DE DIVS>>>>>>>>>>>>>


let Borrar = document.getElementById("borrar")

let usuariosStorage = localStorage.getItem("Usuarios")


let Añadir = document.getElementById("añadir")
Añadir.addEventListener("click",()=>{
let usuarios =[]

if(usuariosStorage){
    usuarios = JSON.parse(usuariosStorage)
}

usuarios.forEach(item => {
    let div = document.createElement("div")
    div.innerHTML =`
	<div class="estructura">
    <h3 class="titulo-producto-carrito">Productos:${item.Carrito}</h3>
    <p class="titulo-producto-carrito">Nombre:${item.nombre}</p>
    <b class="precio-producto-carrito">Precio:${item.Precio}</b>
    </div>`;

    document.getElementById("carrito").append(div)
});
})
// <<<<<<<<<<<<<<<<<<CREADOR DE DIVS>>>>>>>>>>>>>


// <<<<<<<<<<<<BOTON(CRUZ) PARA ELIMINAR EL CARRITO>>>>>>>>>>
Borrar.addEventListener("click",()=>{
    localStorage.clear()
    // alert("Carrito eliminado")
    location.reload()
})

// <<<<<<<<<<<<BOTON(CRUZ) PARA ELIMINAR EL CARRITO>>>>>>>>>>