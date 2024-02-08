const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});




// <<<<<<<<<<<<<<<<COMENTAR ESTA PARTE AUN ASI SE GUARDA EN Storage( NOSE AUN COMO HACER PARA TOCAR EL BOTON Y QUE AGREGUE)>>>>>>>>

const Usuarios = [
    {Carrito:1, nombre:"Zapatos Nike", Precio:"80$"},
    {Carrito:2, nombre:"Audifonos", Precio:"20$"},
    {Carrito:3, nombre:"Reloj", Precio:"50$"},
    {Carrito:4, nombre:"Smartwatch", Precio:"90$"},
	{Carrito:5,nombre:"Perfume",Precio:"50$"}
]

localStorage.setItem("Usuarios",JSON.stringify(Usuarios))

// <<<<<<<<<<<<<<<<COMENTAR ESTA PARTE AUN ASI SE GUARDA EN Storage( NOSE AUN COMO HACER PARA TOCAR EL BOTON Y QUE AGREGUE)>>>>>>>>

// <<<<<<<<<<<<<<<<<<CREADOR DE DIVS>>>>>>>>>>>>>

let Borrar = document.getElementById("borrar")
let usuarios =[]
let usuariosStorage = localStorage.getItem("Usuarios")

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

// <<<<<<<<<<<<<<<<<<CREADOR DE DIVS>>>>>>>>>>>>>


// <<<<<<<<<<<<BOTON(CRUZ) PARA ELIMINAR EL CARRITO>>>>>>>>>>
Borrar.addEventListener("click",()=>{
    localStorage.clear()
    alert("Carrito eliminado")
    location.reload()
})

// <<<<<<<<<<<<BOTON(CRUZ) PARA ELIMINAR EL CARRITO>>>>>>>>>>
