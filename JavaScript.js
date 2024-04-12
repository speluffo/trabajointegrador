<script>
    // Array para almacenar los productos seleccionados en el carrito
    let carrito = [];

    // Función para agregar un producto al carrito
    function agregarAlCarrito(nombre, precio) {
        carrito.push({ nombre, precio });
        actualizarCarrito();
    }

    // Función para eliminar un producto del carrito
    function eliminarDelCarrito(index) {
        carrito.splice(index, 1);
        actualizarCarrito();
    }

    // Función para actualizar la vista del carrito
    function actualizarCarrito() {
        const cartItemsDiv = document.getElementById('cart-items');
        const totalQuantitySpan = document.getElementById('total-quantity');
        const totalPriceSpan = document.getElementById('total-price');
        
        cartItemsDiv.innerHTML = '';

        let totalQuantity = 0;
        let totalPrice = 0;

        carrito.forEach((producto, index) => {
            totalQuantity++;
            totalPrice += producto.precio;

            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <img src="imagen/moto${index + 1}.jpeg" alt="${producto.nombre}">
                <div class="item-info">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio.toFixed(2)}</p>
                    <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
                </div>
            `;
            cartItemsDiv.appendChild(itemDiv);
        });

        totalQuantitySpan.textContent = totalQuantity;
        totalPriceSpan.textContent = totalPrice.toFixed(2);
    }

    // Eventos de botón "Agregar al carrito"
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productName = document.querySelectorAll('.product h2')[index].textContent;
            const productPrice = parseFloat(document.querySelectorAll('.product p')[index].textContent.replace('Precio: $', ''));

            agregarAlCarrito(productName, productPrice);
        });
    });
</script>
