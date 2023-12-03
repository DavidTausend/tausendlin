//Javascrip for the slide images
document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("myslides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // listeners to prev and next buttons to prevent default link behavior when JS is enabled
    document.querySelector('.prev').addEventListener('click', function (event) {
        event.preventDefault();
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function (event) {
        event.preventDefault();
        plusSlides(1);
    });
});