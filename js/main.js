const carrito = []
let precioFinal = 0

document.addEventListener('DOMContentLoaded', ()=>{
    const productos = document.querySelectorAll('.inputBox input')
   
    for(let prod of productos){
        prod.addEventListener('change', (evt)=>{
            if(evt.currentTarget.checked){
                let title = evt.currentTarget.parentElement.parentElement.dataset.title
                let price = evt.currentTarget.parentElement.parentElement.dataset.price
                carrito.push(title + " - $" + price)

                precioFinal += Number(price)
            }else{
                let title = evt.currentTarget.parentElement.parentElement.dataset.title
                let price = evt.currentTarget.parentElement.parentElement.dataset.price
                
                let index = carrito.indexOf(title + " - $" + price);
                if (index >= 0) {
                    carrito.splice( index, 1 );
                }

                precioFinal -= Number(price)
                
            }
            actCarrito()
            
        })
        
    }
})

function actCarrito(){
    let html=""
    for(let prod of carrito){
        if(title =! null){
            html += `
            <li>${prod}</li>
            `
        }else{
            
        }
        
    }

    let ul = document.querySelector("#carrito ul")
    let h4 = document.querySelector("#carrito h4")
    ul.innerHTML = html
    h4.innerHTML = "$" + precioFinal
}
 
const btn = document.querySelector('#btnPagar')
btn.onclick = (evt)=>{
    if(precioFinal != 0){
        evt.preventDefault()
        let pago = 
        `
        <div class="d-flex justify-content-between">
        <p>El pago de $${precioFinal} fue realizado correctamente</p>
        <button class="btnn m-2" id="btnReset">Reiniciar compra</button>
        </div>
        `
        let carroPago = document.querySelector("#carrito")
        carroPago.innerHTML = pago

        const btnR = document.querySelector('#btnReset')
        btnR.onclick = (evt) => {
        evt.preventDefault()
        window.location.reload()
        }
    }else{
        evt.preventDefault()
        let pago = 
        `
        <div class="d-flex justify-content-between">
        <p>El carrito se encuentra vacío</p>
        <button class="btnn m-2" id="btnReset">Reiniciar compra</button>
        </div>
        `
        let carroPago = document.querySelector("#carrito")
        carroPago.innerHTML = pago

        const btnR = document.querySelector('#btnReset')
        btnR.onclick = (evt) => {
        evt.preventDefault()
        window.location.reload()
        }
    }   
}


    
    
    
    
    
    
    
    
