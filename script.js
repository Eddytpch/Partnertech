document.addEventListener('DOMContentLoaded', function () {
    const carrito = [];
    const contadorCarrito = document.getElementById('contador-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', function () {
            const producto = this.getAttribute('data-producto');
            const precio = parseFloat(this.getAttribute('data-precio'));
            carrito.push({ producto, precio });
            actualizarCarrito();
        });
    });

    function actualizarCarrito() {
        // Actualizar contador
        contadorCarrito.textContent = carrito.length;

        // Actualizar lista de productos
        listaCarrito.innerHTML = '';
        let total = 0;
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.producto} - $${item.precio.toFixed(2)}`;
            listaCarrito.appendChild(li);
            total += item.precio;
        });

        // Actualizar total
        totalCarrito.textContent = total.toFixed(2);
    }

    document.querySelector('.btn-comprar').addEventListener('click', function () {
        if (carrito.length > 0) {
            alert('Gracias por su compra. Total: $' + totalCarrito.textContent);
            carrito.length = 0; // Vaciar carrito
            actualizarCarrito();
        } else {
            alert('El carrito está vacío.');
        }
    });
});
