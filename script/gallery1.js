document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.image-container');

    containers.forEach(container => {
        const image = container.querySelector('.image_eq');
        let currentImageIndex = 0;

        const setImage = (images) => {
            image.src = images[currentImageIndex];
        };

        const showNextImage = () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            setImage(images);
        };

        const showPrevImage = () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            setImage(images);
        };

        container.querySelector('.prev-btn').addEventListener('click', showPrevImage);
        container.querySelector('.next-btn').addEventListener('click', showNextImage);

        let images;
        if (container.classList.contains('ambulans-images')) {
            images = ["image/ambulans/ambulans_left.jpg", "image/ambulans/ambulans_right.jpg", "image/ambulans/ambulans_front.jpg", "image/ambulans/ambulans_bottom.jpg"];
        } else if (container.classList.contains('scania-images')) {
            images = ["image/scania/scania_front.jpg", "image/scania/scania_left.jpg"];
        } else if (container.classList.contains('trailer-images')) {
            images = ["image/trailer/trailer_right.jpg", "image/trailer/trailer_left.jpg", "image/trailer/trailer_bottom.jpg"];
        } else if (container.classList.contains('dudek-images')) {
        images = ["image/dudek/dudek_right.jpg"];
        } else if (container.classList.contains('melex-images')) {
            images = ["image/melex/melex.jpg", "image/melex/melex_front.jpg"];
        }
        

        setImage(images);
    });
});