document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector("#producto1 .main-image");
    const thumbnails = document.querySelectorAll("#producto1 .thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const imageUrl = this.getAttribute("src");
            mainImage.setAttribute("src", imageUrl);
        });
    });
});
@media screen and (max-width: 600px) {
    .price {
        font-size: 16px; /* Reducir el tamaño de la fuente en pantallas más pequeñas */
        padding: 3px 6px; /* Reducir el espacio entre el borde y el texto */
    }
}
