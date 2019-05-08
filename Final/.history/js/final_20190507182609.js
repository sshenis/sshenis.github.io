/*
home = -5
about = -10
projects = -15
contact = -20
*/

var home = document.querySelector("#home-page"),
about = document.querySelector("#about-page"),
projects = document.querySelector("#project-page"),
contact = document.querySelector("#contact-page");

function goHome() {
  home.style.opacity = 1;
  home.style.zIndex = 0;

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  fixed.style.opacity = 0;
  fixed.style.zIndex = "-15";
  fixed.style.position = "fixed";

  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  contact.style.position = "fixed";
}

function goProjects() {
  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  projects.style.opacity = 1;
  projects.style.zIndex = 0;
  projects.style.position = "relative";

  contact.style.opacity = 1;
  contact.style.zIndex = 0;
  contact.style.position = "relative";
}

function goAbout() {
  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 1;
  about.style.zIndex = 0;

  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  contact.style.position = "fixed";
}

function goContact() {
  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  contact.style.opacity = 1;
  contact.style.zIndex = 0;
  contact.style.position = "relative";
}