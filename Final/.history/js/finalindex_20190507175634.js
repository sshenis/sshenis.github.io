/*
home = -5

*/

var home = document.querySelector("#home-page");

function goHome() {
  alert("!");
  home.style.opacity = 0;
  home.style.zIndex = 0;
  home.style.position = relative;
}