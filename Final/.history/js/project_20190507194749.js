var post = document.querySelectorAll(".post"),
  inside = document.querySelectorAll(".inside-post");

var home = document.querySelector("#home-page"),
  about = document.querySelector("#about-page"),
  project = document.querySelector("#project-page"),
  iproject = document.querySelector("#inside-project"),
  contact = document.querySelector("#contact-page"),
  up = document.querySelector("#up-here");

//animations
post[0].addEventListener("click", function () {
  inside[0].style.opacity = 1;
  inside[0].style.position = "absolute";


  inside[1].style.position = "fixed";
  inside[2].style.position = "fixed";
  inside[3].style.position = "fixed";
  inside[4].style.position = "fixed";
  inside[5].style.position = "fixed";

  iproject.style.zIndex = 25;
  iproject.style.position = "absolute";

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  project.style.position = "fixed";

  contact.style.opacity = 0;
  contact.style.zIndex = "-20";

});

//typography
post[1].addEventListener("click", function () {
  inside[1].style.opacity = 1;
  inside[1].style.width = "450px";

  inside[1].style.position = "absolute";


  inside[0].style.position = "fixed";
  inside[2].style.position = "fixed";
  inside[3].style.position = "fixed";
  inside[4].style.position = "fixed";
  inside[5].style.position = "fixed";

  iproject.style.zIndex = 25;
  iproject.style.position = "absolute";

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  project.style.position = "fixed";

  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  inside[1].scrollIntoView({
    behavior: "smooth"
  });
});

//cooki
post[2].addEventListener("click", function () {
  inside[2].style.opacity = 1;
  inside[2].style.width = "450px";
  inside[2].style.position = "absolute";


  inside[0].style.position = "fixed";
  inside[1].style.position = "fixed";
  inside[3].style.position = "fixed";
  inside[4].style.position = "fixed";
  inside[5].style.position = "fixed";

  iproject.style.zIndex = 25;
  iproject.style.position = "absolute";

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  project.style.position = "fixed";

  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  inside[2].scrollIntoView({
    behavior: "smooth"
  });
});

//vector
post[3].addEventListener("click", function () {
  inside[3].style.opacity = 1;
  inside[3].style.width = "450px";
  inside[3].style.position = "absolute";


  inside[0].style.position = "fixed";
  inside[1].style.position = "fixed";
  inside[2].style.position = "fixed";
  inside[4].style.position = "fixed";
  inside[5].style.position = "fixed";

  iproject.style.zIndex = 25;
  iproject.style.position = "absolute";

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  project.style.position = "fixed";

  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  inside[3].scrollIntoView({
    behavior: "smooth"
  });
});

//wordpress
post[4].addEventListener("click", function () {
  inside[4].style.opacity = 1;
  inside[4].style.width = "450px";
  inside[4].style.position = "absolute";


  inside[0].style.position = "fixed";
  inside[1].style.position = "fixed";
  inside[2].style.position = "fixed";
  inside[3].style.position = "fixed";
  inside[5].style.position = "fixed";

  iproject.style.zIndex = 25;
  iproject.style.position = "absolute";

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  project.style.position = "fixed";

  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  inside[4].scrollIntoView({
    behavior: "smooth"
  });
});

//persona
post[5].addEventListener("click", function () {
  inside[2].style.opacity = 1;
  inside[5].style.width = "450px";
  inside[5].style.position = "absolute";


  inside[0].style.position = "fixed";
  inside[1].style.position = "fixed";
  inside[2].style.position = "fixed";
  inside[3].style.position = "fixed";
  inside[4].style.position = "fixed";

  iproject.style.zIndex = 25;
  iproject.style.position = "absolute";

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  project.style.position = "fixed";

  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  inside[5].scrollIntoView({
    behavior: "smooth"
  });
});