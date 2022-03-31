
    var slides = document.getElementsByClassName('mySlides');
    var slideIndex = 1;
    var dots = document.getElementsByClassName("dot");
    showslides(slideIndex);

    function plusSlides(n) {
        showslides(slideIndex += n);
    }

    function currentSlide(n) {
        showslides(slideIndex = n);
    }

    function showslides(n) {

        console.log(n);
        if (n > slides.length) { slideIndex = 1 };
        if (n < 1) { slideIndex = slides.length };
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex-1].className += " active";
    }

