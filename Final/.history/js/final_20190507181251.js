/*
home = -5
about = -10
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
  home.style.position = "fixed";

  about.style.opacity = 1;
  about.style.zIndex = 0;
}

function goContact() {
  contact.style.opacity = 0;
}