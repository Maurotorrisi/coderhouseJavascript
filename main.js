for (let index = 0; index < 5; index++) {

let nombre = prompt("Ingrese su nombre")
let operacion = prompt("Que producto qusieras averiguar")

if(nombre == "Mauro"){
alert("Bienvenido mauro a la fabrica de nike")
        if(operacion == "zapatillas") {
            alert(`Muy bien estos son los modelos que manejamos
            Zapatillas comunes
            Zapatillas de vestir
            Zapatillas elegantes` )
            
        }
        else if(operacion == "zapatillas deportivas") {
            alert(`muy bien estos son los modelos que nos manejamos
            zapatillas con resortes
            zapatillas para correr
            zapatillas para entrenar`)
        }
        else if(operacion == "relojes") {
            alert(`muy bien estos son los modelos que nos manejamos
            relojes deportivos
            relojes elegantes
            relojes bulgaris
            `)
        }
        else if(operacion == "ojotas") {
            alert(`muy bien estos son los modelos que nos manejamos
            ojotas de color rojo
            ojotas de color verde
            ojotas de color naranja `)
        }
    else {
        alert("No se a encontrado ese servicio")
    }

}
        
        else if(nombre == "Franco"){
            alert("bienvenido franco a la fabrica de nike")
            if(operacion == "zapatillas") {
                alert(`Muy bien estos son los modelos que manejamos
                Zapatillas comunes
                Zapatillas de vestir
                Zapatillas elegantes` )
                
            }
            else if(operacion == "zapatillas deportivas") {
                alert(`muy bien estos son los modelos que nos manejamos`)
            }
            else if(operacion == "relojes") {
                alert(`muy bien estos son los modelos que nos manejamos
                relojes deportivos
                relojes elegantes
                relojes bulgaris
                `)
            }
            else if(operacion == "ojotas") {
                alert(`muy bien estos son los modelos que nos manejamos
                ojotas de color rojo
                ojotas de color verde
                ojotas de color naranja `)
            }
        else {
            alert("No se a encontrado ese servicio")
        }
}
        
else{
            alert("No se a encontrado ese usuario por favor registrese")
    }

}



const Clientes = dinero=>{
let productos = prompt("¿cuantos productos vas a llevar ?");
if (productos > 10){
                    if (dinero >=1000 && dinero < 2000){
                    alert("se te aplicara un descuento de 20%");
        }
            else{
                alert(`se te aplicara un descuento del 10%`);
        }
    }else{
        alert("no se te aplicara ningun descuento estas llevando muy poco")
    }
}

Clientes(1200)
Clientes(900)
Clientes(1500)
