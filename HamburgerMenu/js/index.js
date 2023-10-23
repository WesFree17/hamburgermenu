let carouselImages = document.querySelectorAll('#carousel img');
let currentIndex = 0;

function changeImage() {
 carouselImages[currentIndex].style.opacity = 0;
 currentIndex = (currentIndex + 1) % carouselImages.length;
 carouselImages[currentIndex].style.opacity = 1;
}

setInterval(changeImage, 3000); // Change image every 3 seconds