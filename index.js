document.addEventListener('click', function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalClose = document.getElementById("modalClose");
    const galleryImages = document.querySelectorAll(".gallery__img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        });
    });

    modalClose.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
        modal.style.display = "none";
        }
    });
});
  