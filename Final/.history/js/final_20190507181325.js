/*
home = -5
about = -10

contact = -20
*/

var home = document.querySelector("#home-page"),
about = document.querySelector("#about-page"),
contact = document.querySelector("#contact-page");

function goHome() {
  home.style.opacity = 1;
  home.style.zIndex = 0;

  about.style.opacity = 0;
  about.style.zIndex = "-10";
}

function goAbout() {
  home.style.opacity = 0;
  home.style.zIndex = "-5";


  about.style.opacity = 1;
  about.style.zIndex = 0;
}

function goContact() {
  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  contact.style.opacity = 0;
  contact.style.zIndex = 0;
}