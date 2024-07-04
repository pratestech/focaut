/* Scroll */
const about = document.querySelector('#about');

about.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

const causes = document.querySelector('#causes');

causes.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

const levels = document.querySelector('#levels');

levels.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

const wrapper = document.querySelector('#wrapper');

wrapper.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

/* Slider */
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

/* Menu */
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
  }else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
  }
  menuMobile.addEventListener('close')
}

/* Animation */
window.sr = ScrollReveal({ reset: true });
             
sr.reveal('.container-hero', { duration: 2000,});

/* VLibras */
new window.VLibras.Widget('https://vlibras.gov.br/app');