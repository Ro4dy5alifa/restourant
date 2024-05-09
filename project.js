document.addEventListener("DOMContentLoaded", function() {
    const imageContainers = document.querySelectorAll(".food2 .image-container");
    imageContainers.forEach(container => {
        const images = container.querySelectorAll(".pizza-image");
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((image, i) => {
                if (i === index) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        }

        showImage(currentIndex);

        const prevButton = container.querySelector(".prev-btn");
        const nextButton = container.querySelector(".next-btn");

        prevButton.addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    });
});