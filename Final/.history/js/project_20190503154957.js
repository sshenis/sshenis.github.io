var post = document.querySelectorAll(".post"),
inside = document.querySelectorAll(".inside-post");

var home = document.querySelector("#home-page"),
  about = document.querySelector("#about-page"),
  project = document.querySelector("#project-page"),
  iproject = document.querySelector("#inside-project"),
  contact = document.querySelector("#contact-page");

//animations
post[0].addEventListener("click", function(){
  inside[0].style.opacity = 1;
  inside[0].style.marginTop = "-67%";
  inside[0].style.position = "absolute";
  

  inside[1].style.position = "fixed";
  inside[2].style.position = "fixed";
  inside[3].style.position = "fixed";
  inside[4].style.position = "fixed";
  inside[5].style.position = "fixed";

  iproject.style.zIndex = 25;

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  fixedit();
  
  contact.style.opacity = 0;
  contact.style.zIndex = "-20";

});

//cooki
post[1].addEventListener("click", function(){
  inside[1].style.opacity = 1;
  inside[1].style.marginTop = "-67%";
  inside[1].style.width = "100%";
  inside[1].style.position = "absolute";


  inside[0].style.position = "fixed";
  inside[2].style.position = "fixed";
  inside[3].style.position = "fixed";
  inside[4].style.position = "fixed";
  inside[5].style.position = "fixed";

  iproject.style.zIndex = 25;

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  fixedit();
  
  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  inside[1].scrollIntoView({behavior: "smooth"});
});

//vector
post[2].addEventListener("click", function(){
  inside[2].style.opacity = 1;
  inside[2].style.marginTop = "-67%";
  inside[2].style.width = "100%";
  inside[2].style.position = "absolute";


  inside[0].style.position = "fixed";
  inside[1].style.position = "fixed";
  inside[3].style.position = "fixed";
  inside[4].style.position = "fixed";
  inside[5].style.position = "fixed";

  iproject.style.zIndex = 25;

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  fixedit();
  
  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  inside[2].scrollIntoView({behavior: "smooth"});
});

//typography
post[3].addEventListener("click", function(){
  inside[3].style.opacity = 1;
  inside[3].style.marginTop = "-67%";
  inside[3].style.width = "100%";
  inside[3].style.position = "absolute";


  inside[0].style.position = "fixed";
  inside[1].style.position = "fixed";
  inside[2].style.position = "fixed";
  inside[4].style.position = "fixed";
  inside[5].style.position = "fixed";

  
  iproject.style.zIndex = 25;

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  fixedit();
  
  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  inside[3].scrollIntoView({behavior: "smooth"});
});

//persona
post[4].addEventListener("click", function(){
  inside[4].style.opacity = 1;
  inside[4].style.marginTop = "-67%";
  inside[4].style.width = "100%";
  inside[4].style.position = "absolute";


  inside[0].style.position = "fixed";
  inside[1].style.position = "fixed";
  inside[2].style.position = "fixed";
  inside[3].style.position = "fixed";
  inside[5].style.position = "fixed";

  
  iproject.style.zIndex = 25;

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  fixedit();
  
  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  inside[4].scrollIntoView({behavior: "smooth"});
});

//wordpress
post[5].addEventListener("click", function(){
  inside[5].style.opacity = 1;
  inside[5].style.marginTop = "-67%";
  inside[5].style.width = "100%";
  inside[5].style.position = "absolute";


  inside[0].style.position = "fixed";
  inside[1].style.position = "fixed";
  inside[2].style.position = "fixed";
  inside[3].style.position = "fixed";
  inside[4].style.position = "fixed";

  
  iproject.style.zIndex = 25;

  home.style.opacity = 0;
  home.style.zIndex = "-5";

  about.style.opacity = 0;
  about.style.zIndex = "-10";

  project.style.opacity = 0;
  project.style.zIndex = "-15";
  fixedit();
  
  contact.style.opacity = 0;
  contact.style.zIndex = "-20";
  inside[5].scrollIntoView({behavior: "smooth"});
});