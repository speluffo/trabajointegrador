document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const newSrc = thumbnail.src;
            mainImage.src = newSrc;
        });
    });
});
@media screen and (max-width: 600px) {
    .price {
        font-size: 16px; /* Reducir el tamaño de la fuente en pantallas más pequeñas */
        padding: 3px 6px; /* Reducir el espacio entre el borde y el texto */
    }
}
