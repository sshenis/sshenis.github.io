/*
home = -5

*/

var home = document.querySelector("#home-page"),
about = document.querySelector("#about-page");

function goHome() {
  home.style.opacity = 1;
  home.style.zIndex = 0;
  home.style.position = relative;

  about.style.opacity = 1;
  about.style.zIndex = 0;
}

function goAbout() {
  home.style.opacity = 0;
  home.style.zIndex = "-5";
  home.style.position = "fixed";

  about.style.opacity = 1;
  about.style.zIndex = 0;
}