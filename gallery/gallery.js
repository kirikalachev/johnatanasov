let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Ensure the index loops back
    if (index < 0) {
        currentIndex = totalSlides - 1; // Go to last slide
    } else if (index >= totalSlides) {
        currentIndex = 0; // Go to first slide
    } else {
        currentIndex = index; // Set current index
    }

    const offset = -currentIndex * 100; // Calculate the offset
    slides.style.transform = `translateX(${offset}%)`; // Move slides
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Initial display
showSlide(currentIndex);
