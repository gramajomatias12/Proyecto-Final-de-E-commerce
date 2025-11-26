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