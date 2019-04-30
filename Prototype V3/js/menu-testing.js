var menu = document.querySelector("#pulloutMenu"),
    hamburgerMenu = document.querySelector("#hamburgerMenu"),
    xMenu = document.querySelector("#xMenu"),
    menuNum = 0,
    recipeBut = document.querySelector("#recipe-container"),
    dropRecipes = document.querySelector(".dropdown-recipes"),
    addIcon = document.querySelector(".add"),
    container = document.querySelector(".app-container"),
    topmenu = document.querySelector("#topmenu"),
    dnum = 0,
    scrolltoTop = document.querySelector(".scrolltoTop");


// OPEN HAMBURGER MENU 
function openMenu() {
  
  scrolltoTop.style.display = "none";
    
    menuNum = menuNum + 1;
    topmenu.style.height = "150px";
    menu.style.left = "0%";
    dropRecipes.style.display = "none";
    xMenu.style.opacity = 1;
    hamburgerMenu.style.opacity = 0;
    //container.style.display = "none";

    if (menuNum > 1) {
        menuNum = 0;
      
      scrolltoTop.style.display = "block";

        hamburgerMenu.style.opacity = 1;
        xMenu.style.opacity = 0;

        menu.style.left = "-100%";
//        dropRecipes.style.opacity = 0;
        addIcon.innerHTML = "+";

        topmenu.style.height = "150px";
        //        container.style.display = "block";
    }

    dnum = 0;
}



//OPEN RECIPE DROP DOWN MENU
function dropMenu() {

    dnum = dnum + 1;
    dropRecipes.style.opacity = 1;
    dropRecipes.style.display = "block";
  dropRecipes.style.maxHeight = "744px";
//    dropRecipes.style.left = "0px";
    addIcon.innerHTML = "-";

    //    menu.style.position = "relative";
    //    container.style.display = "none";


    if (dnum >= 2) {
        dnum = 0;
      dropRecipes.style.display = "none";
//        dropRecipes.style.opacity = 0;
//        dropRecipes.style.left = "-100%";
      
        addIcon.innerHTML = "+";
        menu.style.position = "fixed";
        container.style.display = "flex";
    }
  
  if (screen.height == "812") {
    dropRecipes.style.maxHeight = "1040px";
    dropRecipes.style.bottom = "190px";
  }
  
}