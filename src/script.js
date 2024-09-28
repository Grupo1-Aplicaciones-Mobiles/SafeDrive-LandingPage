document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada correctamente");

    // Selecciona la sección hero y añade la clase de animación
    const heroSection = document.querySelector('.hero-section');
    heroSection.classList.add('slide-down');

    const overlay = document.querySelector('.overlay');
    // Esperar 1 segundo antes de comenzar la transición de desvanecimiento
    setTimeout(() => {
        overlay.style.opacity = '0'; // Cambia la opacidad a 0
    }, 1000);

    // Eliminar el overlay del DOM después de la animación
    overlay.addEventListener('transitionend', () => {
        overlay.remove(); // Elimina la superposición
    });


});

  function toggleInfo(id) {
    var item = document.getElementById('info' + id).previousElementSibling;

    // Si ya está activa, la cerramos
    if (item.classList.contains('active')) {
        item.classList.remove('active');
    } else {
        // Cerramos cualquier otra tira activa
        var activeItems = document.querySelectorAll('.benefit-item.active');
        activeItems.forEach(function (activeItem) {
            activeItem.classList.remove('active');
        });

        // Activamos la tira seleccionada
        item.classList.add('active');
    }
}



