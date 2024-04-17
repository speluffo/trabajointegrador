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

document.addEventListener("DOMContentLoaded", function() {
    var categoriasMenu = document.getElementById("categoriasMenu");

    document.addEventListener("mousemove", function(event) {
        var posX = event.clientX;
        var posY = event.clientY;
        categoriasMenu.style.transform = "translate(" + posX + "px, " + posY + "px)";
    });
});
