const Productos = [
    {id: 1 , nombre:"camisa",precio:"1000$"},
    {id: 2 , nombre:"pantalon",precio:"1500$"},
    {id: 3 , nombre:"media",precio:"109$"},
    {id: 4 , nombre:"gorra",precio:"1220$"},
    {id: 5 , nombre:"calza",precio:"1100"}
]

Productos.push({id: 6 , nombre:"anteojos",precio:"2000$"})

Productos.forEach((item)=>{
alert(item.id);
alert(item.nombre);
alert(item.precio);
})

const productos =["camisa","pantalon","media","anteojos","gorra"]

productos.push("calza")

for (let index = 0; index < productos.length; index++) {
    

buscador = prompt("Que producto necesita camisa,media,pantalon,anteojos,gorra o calza")

if(productos.includes(buscador)){
    alert("Producto disponible")
}

else alert("Producto no disponible")

}


// METODO FILTER

const Articulos = [{id: 1 , nombre:"camisa",precio:1000},
{id: 2 , nombre:"pantalon",precio:1500},
{id: 3 , nombre:"media",precio:109},
{id: 4 , nombre:"gorra",precio:1220},
{id: 5 , nombre:"calza",precio:1100}]

let Precio = Number(prompt("Cuanto dinero tienes los precios rondan entre 1000 y 1500"))

const productosFiltrados = Articulos.filter(item=>item.precio <= Precio)


productosFiltrados.forEach((item)=>{
    alert(`id:${item.id}
nombre:${item.nombre}
precio:${item.precio}`
    )
}
)