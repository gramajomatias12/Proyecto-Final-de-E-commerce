// Función para manejar la visibilidad del modal (sustituto del data-bs-toggle)
function toggleModal(id) {
    const modal = document.getElementById(id);
    if (modal.classList.contains('modal-open')) {
        modal.classList.remove('modal-open');
        // Habilitar scroll del cuerpo
        document.body.style.overflow = '';
    } else {
        modal.classList.add('modal-open');
        // Deshabilitar scroll del cuerpo mientras el modal está abierto
        document.body.style.overflow = 'hidden';
    }
}
// ===========================================
// 1️ OBTENER PRODUCTOS DESDE LA API
// ===========================================
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(productos => {
        const contenedor = document.getElementById('productos-container');
        const mensajeCargando = document.getElementById('mensaje-cargando');
        // Ocultamos el mensaje de carga porque ya llegaron los productos
        mensajeCargando.style.display = "none";
        productos.forEach(producto => {
            // CREAR TARJETA DEL PRODUCTO
            const card = document.createElement('div');
            card.className = 'producto-card';
            card.innerHTML = `
            <div class="producto-img-wrapper">
                <img src="${producto.image}" alt="${producto.title}">
            </div>
            <h3 title="${producto.title}">
                ${producto.title.length > 40 ? producto.title.substring(0, 40) + '...' : producto.title}
            </h3>
            <p>$${producto.price}</p>
            <button class="btn-agregar" data-id="${producto.id}">
                <i class="fa fa-cart-plus"></i> Agregar
            </button>
            `;
            contenedor.appendChild(card);
            card.classList.add('col-xl-3','col-lg-4','col-md-6','col-sm-12');

        });
        // Activar eventos
        cargarEventosAgregar();
        actualizarContador();
    }).catch(error => {
        // Mostrar mensaje de error
        document.getElementById('mensaje-cargando').textContent =
            "Ocurrió un error al obtener los productos: " +
            error.message;
    });

// ===========================================
// 2️ FUNCIÓN PARA OBTENER EL CARRITO ACTUAL
// ===========================================
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}
// ================================================
// 3️ FUNCIÓN PARA GUARDAR EL CARRITO EN STORAGE
// ================================================
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
// ==========================================
// 4️ FUNCIÓN PARA AGREGAR PRODUCTO AL CARRITO
// ==========================================
function agregarAlCarrito(id) {
    let carrito = obtenerCarrito();
    carrito.push(id); // Podrías guardar el objeto completo si quisieras
    guardarCarrito(carrito);
    actualizarContador();
    alert('Producto agregado al carrito');
}
// =====================================================
// 5️ FUNCIÓN PARA ACTUALIZAR EL CONTADOR EN PANTALLA
// =====================================================
const contadorCarrito = document.getElementById('cart-count');

function actualizarContador() {
    const carrito = obtenerCarrito();
    contadorCarrito.textContent = `${carrito.length}`;
}
// ============================================================
// 6️ FUNCIÓN PARA ACTIVAR EL EVENTO DE AÑADIR A TODOS LOS BOTONES
// ============================================================
function cargarEventosAgregar() {
    const botones = document.querySelectorAll('#productos-container button');
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            agregarAlCarrito(boton.getAttribute('data-id'));
        });
    });
}

// ==========================================
// 7️ FUNCIÓN PARA VACIAR EL CARRITO Y RESETEAR CONTADOR
// ======================================================
// document.getElementById('vaciar-carrito').addEventListener('click',
//     () => {
//         localStorage.removeItem('carrito');
//         actualizarContador();
//         alert('Carrito vaciado correctamente');
//     });

// ==========================================
// 8️ ACTUALIZAR EL CONTADOR AL CARGAR LA PÁGINA O VOLVER A ELLA
// ==========================================
document.addEventListener("DOMContentLoaded", actualizarContador);

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        actualizarContador();
    }
});