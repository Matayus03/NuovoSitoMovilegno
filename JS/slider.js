const slides = document.querySelectorAll(".hero-slider .slide");
const nextBtn = document.querySelector(".arrow.next");
const prevBtn =  document.querySelector(".arrow.prev");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
let sliderTimer = null;
const interval = 7000;

const dots = [];

slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.dataset.slide = i;
    dotsContainer.appendChild(dot);
    dots.push(dot);

    dot.addEventListener("click", () => {
        currentSlide = i;
        updateSlide();
        resetAutoplay();
    });
});

function updateSlide() {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === currentSlide));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
}

function resetAutoplay() {
    clearTimeout(sliderTimer);
    sliderTimer = setTimeout(nextSlide, interval);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
    resetAutoplay();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
    resetAutoplay();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50;

slides.forEach(slide => {
    slide.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    slide.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });
});

function handleSwipe() {
    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) < swipeThreshold) return;

    if (deltaX > 50) {
        prevSlide();
    } else if (deltaX < -50) {
        nextSlide();
    }
}

resetAutoplay();