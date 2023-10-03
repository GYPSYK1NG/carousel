document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".indicator");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        slides[index].style.display = "block";

        indicators.forEach((indicator) => {
            indicator.classList.remove("active");
        });
        indicators[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            showSlide(index);
            currentIndex = index;
        });
    });

    showSlide(currentIndex);
});