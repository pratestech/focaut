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

/* Menu */
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "assets/img/menu-svgrepo-com.svg";
  }else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "assets/img/close_33dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
  }
  menuMobile.addEventListener('close')
}

/* Animation */
window.sr = ScrollReveal({ reset: true });
             
sr.reveal('.container-hero', { duration: 2000,});