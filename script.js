const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Botones
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Contador
let counter = 0;
const size = carouselImages[0].clientWidth;

// Listener para el botón Siguiente
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) {
        counter = -1; // Reinicia al inicio si llega al final
    }
    counter++;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Listener para el botón Anterior
prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = carouselImages.length; // Va al final si está en la primera
    }
    counter--;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Ajuste automático al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    const newSize = carouselImages[0].clientWidth;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
});