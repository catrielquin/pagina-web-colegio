// JavaScript para el carrusel de imágenes
let slideIndex = 1;
showSlides(slideIndex);

// Función para avanzar/retroceder las imágenes
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar una imagen específica
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Iniciar el carrusel automáticamente
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 3000); // Cambia de imagen cada 3 segundos