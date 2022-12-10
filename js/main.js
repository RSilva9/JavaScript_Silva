const carrito = JSON.parse(localStorage.getItem('carrito')) || []
let precioFinal = JSON.parse(localStorage.getItem('precioFinal')) || 0

actCarrito()

document.addEventListener('DOMContentLoaded', () => {
    const productosAdd = document.getElementsByClassName('btnAdd')
    const productosRemove = document.getElementsByClassName('btnRemove')

    for (let prod of productosAdd) {

        prod.addEventListener('click', (evt) => {
            let idproducto = evt.currentTarget.parentElement.parentElement.dataset.id
            fetch('./vinosApi.json')
                .then((resp) => resp.json())
                .then((products) => {

                    for (let prod of products) {
                        if (prod.id == idproducto) {
                            let title = prod.nombre
                            let price = prod.precio
                            let id = prod.id
                            carrito.push({
                                title: title,
                                price: price,
                                id: id
                            })
                            precioFinal += Number(price)
                            Toastify({
                                text: `${title} agregado al carrito`,
                                duration: 2000,
                                position: "right",
                                style: {
                                    background: "linear-gradient(to right, #6246af65, #451db365)",
                                }
                            }).showToast();
                        }
                    }
                })
                .finally(() => {
                    actCarrito()
                })

        })

    }

    for (let prod of productosRemove) {

        prod.addEventListener('click', (evt) => {
            let id = evt.currentTarget.parentElement.parentElement.dataset.id
            const index = carrito.findIndex(object => {
                return object.id === id
            })
            if (index >= 0) {
                let price = carrito[index].price
                let title = carrito[index].title
                precioFinal -= Number(price)

                carrito.splice(index, 1)

                Toastify({
                    text: `${title} eliminado del carrito`,
                    duration: 2000,
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #a72d2d65, #b4111165)",
                    }
                }).showToast();

                actCarrito()
            }
        })
    }
})

function actCarrito() {
    localStorage.setItem('precioFinal', JSON.stringify(precioFinal))
    localStorage.setItem('carrito', JSON.stringify(carrito))
    let html = ""
    for (let prod of carrito) {
        if (title = !null) {
            html += `
             <li>${prod.title + " - $" + prod.price}</li>
             `
        }
    }

    let ul = document.querySelector("#carrito ul")
    let h4 = document.querySelector("#carrito h4")
    ul.innerHTML = html
    h4.innerHTML = "$" + precioFinal
}

const btn = document.querySelector('#btnPagar')
btn.onclick = (evt) => {
    if (precioFinal != 0) {
        evt.preventDefault()

        Swal.fire({
            title: `El pago de ${precioFinal} fue realizado con éxito`,
            icon: 'success'
        }).then((res) => {
            if (res.isConfirmed || res.isDismissed) {
                window.location.reload()
            }
        })

    } else {
        evt.preventDefault()

        Swal.fire({
            title: 'El carrito está vacío',
            icon: 'error'
        })
    }

    localStorage.removeItem('carrito')
    localStorage.removeItem('precioFinal')
}