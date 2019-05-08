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

  projects.style.opacity = 0;
  projects.style.zIndex = "-15";
  projects.style.position = "fixed";

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

  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  contact.style.position = "fixed";
}

function goAbout() {
  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 1;
  about.style.zIndex = 0;

  projects.style.opacity = 0;
  projects.style.zIndex = "-15";

  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  contact.style.position = "fixed";
}

function goContact() {
  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  projects.style.opacity = 0;
  projects.style.zIndex = "-15";
delay();

  contact.style.opacity = 1;
  contact.style.zIndex = 0;
  contact.style.position = "relative";
}

function delay() {
  setTimeout(function () {
    projects.style.position = "fixed";
  }, 500);
}


window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 1000) {
    document.getElementById("top").style.opacity = 1;
  } else {
    document.getElementById("top").style.opacity = 0;
  }
}

function goup() {


  document.getElementById("top").style.cursor = "  cursor: url(http://cur.cursors-4u.net/others/oth-6/oth656.cur), auto !important";
  setTimeout(function () {
    document.querySelector("#uphere").scrollIntoView({
      behavior: "smooth"
    })
  }, 500);

}