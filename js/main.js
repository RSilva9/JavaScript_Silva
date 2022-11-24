const carrito = JSON.parse(localStorage.getItem('carrito')) || []
let precioFinal = JSON.parse(localStorage.getItem('precioFinal')) || 0
var inputs = JSON.parse(localStorage.getItem('inputs')) || document.querySelectorAll('input[type="checkbox"]')
for(let i of inputs){
    document.getElementById(i.id).checked = i.checked
}

actCarrito()

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
            
            inputs = document.querySelectorAll('input[type="checkbox"]')
            var arrData = []
            for(let c of inputs){
                arrData.push({ id: c.id, checked: c.checked })
            }
            localStorage.setItem('inputs', JSON.stringify(arrData))
        })
    }
})

function actCarrito(){
    localStorage.setItem('precioFinal', JSON.stringify(precioFinal))
    localStorage.setItem('carrito', JSON.stringify(carrito))
    let html=""
    for(let prod of carrito){
        if(title =! null){
            html += `
             <li>${prod}</li>
             `
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
        
        }
        localStorage.removeItem('carrito')
        localStorage.removeItem('precioFinal')
        localStorage.removeItem('inputs')
        const btnR = document.querySelector('#btnReset')
        btnR.onclick = (evt) => {
        evt.preventDefault()
        window.location.reload()
        }   
}