alert("Bienvenido a la tienda online")

let listaCarrito = "Carrito: "
let precioFinal = 0
menu()

function salir(){
    alert("Fin de la compra.")
}

function catalogo(){
    console.log("________________________")
    console.log("1 - Caja de vino individual - $2800.")
    console.log("2 - Caja de vino doble - $5600.")
    console.log("3 - Caja de vino triple - $8000.")
    console.log("4 - Caja de vino individual con chocolate - $3000.")
    console.log("5 - Caja de vino individual con copa - $4500.")
    console.log("6 - Atrás.")
    
    let opt = prompt("Elegir opción.");
    do{
        switch(opt){
            case "1":
                if(listaCarrito == "Carrito: "){
                    listaCarrito = listaCarrito + "Caja de vino individual - $2800"
                }else{
                    listaCarrito = listaCarrito + ", Caja de vino individual - $2800"
                }
                
                precioFinal += 2800
                alert("Caja de vino individual agregado al carrito")
                break
            case "2":
                if(listaCarrito == "Carrito: "){
                    listaCarrito = listaCarrito + "Caja de vino doble - $5600"
                }else{
                    listaCarrito = listaCarrito + ", Caja de vino doble - $5600"
                }
                alert("Caja de vino doble agregado al carrito")
                precioFinal += 5600
                break
            case "3":
                if(listaCarrito == "Carrito: "){
                    listaCarrito = listaCarrito + "Caja de vino triple - $8000"
                }else{
                    listaCarrito = listaCarrito + ", Caja de vino triple - $8000"
                }
                alert("Caja de vino triple agregado al carrito")
                precioFinal += 8000
                break
            case "4":
                if(listaCarrito == "Carrito: "){
                    listaCarrito = listaCarrito + "Caja de vino individual con chocolate - $3000"
                }else{
                    listaCarrito = listaCarrito + ", Caja de vino individual con chocolate - $3000"
                }
                alert("Caja de vino individual con chocolate agregado al carrito")
                precioFinal += 3000
                break
            case "5":
                if(listaCarrito == "Carrito: "){
                    listaCarrito = listaCarrito + "Caja de vino individual con copa. - $4500"
                }else{
                    listaCarrito = listaCarrito + ", Caja de vino individual con copa. - $4500"
                }
                alert("Caja de vino individual con copa agregado al carrito")
                precioFinal += 4500
                break
            case "6":
                menu()
                break
        }
        opt = prompt("Elegir opción.");
    }while(opt != "6")

    if(opt="6"){
        menu()
    }
}

function carrito(){
    console.log(listaCarrito)
    console.log("Precio final: $" + precioFinal)

    pm = prompt("1- Pagar. 2- Volver al menu.")
    if(pm == "1"){
        if(precioFinal == 0){
            alert("El carrito está vacío.")
            menu()
        }else{
            alert("Pago realizado.")
            salir()
        }
        
    }else if (pm == "2"){
        menu()
    }
    
}

function menu(){
    console.log("________________________")
    console.log("1 - Ver catálogo.")
    console.log("2 - Ver carrito.")
    console.log("3 - Salir.")

    let opti = prompt("Elegir opción.")
    switch(opti){
        case "1":
            catalogo()
            break
        case "2":
            carrito()
            break
        case "3":
            salir()
            break
    }
}

