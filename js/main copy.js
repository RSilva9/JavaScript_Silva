function Caja(tam, ad, pr){
     this.tamano = tam;
     this.adicional = ad;
     this.precio = pr;
}

const cajaInd = new Caja("individual", "nada", 2800);
const cajaDob = new Caja("doble", "nada", 5600);
const cajaTri = new Caja("triple", "nada", 8000);
const cajaIndChoc = new Caja("individual", "chocolate", 3000);
const cajaIndCop = new Caja("individual", "copa", 4500);

const carrito = []
const productos = [cajaInd, cajaDob, cajaTri, cajaIndChoc, cajaIndCop]

let precioFinal = 0

alert("Bienvenido a la tienda online")
menu()

function menu(){
    let opt1 = prompt("Elegir opción: \n1 - Ver catálogo. \n2 - Ver carrito. \n3 - Salir.");
    switch(opt1){
        case "1":
            catalogo()
            break
        case "2":
            carro()
            break
        case "3":
            (function salir(){alert("Fin de la compra.")})()
            break
        default:
            alert("Opción inexistente.")
            menu()
    }
}

function catalogo(){
    console.log("____________________________")
    let i=1;
    for(const item of productos){ //Muestra todas
        if(item.adicional == "nada"){
             console.log(i + " - Caja de vino " + item.tamano + " - $" + item.precio)
        }else{
             console.log(i+ " - Caja de vino " + item.tamano + " con " + item.adicional + " - $" + item.precio)
        }
        i+=1
    }
    console.log(i + " - Atrás.")
    
    let optcat = prompt("Elegir opción:")
    while(optcat != i){
        if(optcat > productos.length+1){
            alert("Opción inexistente")
            catalogo()
        }else{
            precioFinal += productos[optcat-1].precio
            if(productos[optcat-1].adicional == "nada"){
                alert("Caja de vino " + productos[optcat-1].tamano + " agregado al carrito.")
            }else{
                alert("Caja de vino " + productos[optcat-1].tamano + " con " + productos[optcat-1].adicional + " agregado al carrito.")
            }
            carrito.push(productos[optcat-1])
        }
        
        optcat = prompt("Elegir opción:")
    }
    menu()
}

function carro(){
    if(carrito.length == 0){
        alert("El carrito está vacío")
        menu()
    }else{
        let i=1
        console.log("-------- Carrito --------")
        for(const item of carrito){ //Muestra todas
            if(item.adicional == "nada"){
                console.log(i + " - Caja de vino " + item.tamano + " - $" + item.precio)
            }else{
                console.log(i+ " - Caja de vino " + item.tamano + " con " + item.adicional + " - $" + item.precio)
            }
            i+=1
        }
        console.log("Precio final a pagar: $" + precioFinal)
        let pm = prompt("1- Pagar. \n2- Volver al menu.")
        if(pm == "1"){
            alert("Pago realizado.")
        }else if (pm == "2"){
            menu()
        }else if (pm != "1" || "2"){
            alert("Opción inexistente.")
            carro()
        }
    }
}

    
