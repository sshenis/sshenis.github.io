var menu = document.querySelector("#pulloutMenu"),
    hamburgerMenu = document.querySelector("#hamburgerMenu"),
    xMenu = document.querySelector("#xMenu"),
    num = 0,
    recipeBut = document.querySelector("#recipe-container"),
    dropRecipes = document.querySelector(".dropdown-recipes"),
    addIcon = document.querySelector(".add"),
    container = document.querySelector(".app-container"),
    topmenu = document.querySelector("#topmenu"),
    dnum = 0;


// OPEN HAMBURGER MENU 
function openMenu() {
    
    num = num + 1;
    topmenu.style.height = "auto";
    menu.style.left = "0%";
    xMenu.style.opacity = 1;
    hamburgerMenu.style.opacity = 0;
    //container.style.display = "none";

    if (num > 1) {
        num = 0;

        hamburgerMenu.style.opacity = 1;
        xMenu.style.opacity = 0;

        menu.style.left = "-100%";
        dropRecipes.style.opacity = 0;
        addIcon.innerHTML = "+";

        topmenu.style.height = "auto";
        //        container.style.display = "block";
    }

    dnum = 0;
}



//OPEN RECIPE DROP DOWN MENU
function dropMenu() {

    dnum = dnum + 1;
    dropRecipes.style.opacity = 1;
    addIcon.innerHTML = "-";

    //    menu.style.position = "relative";
    //    container.style.display = "none";


    if (dnum >= 2) {
        dnum = 0;
        dropRecipes.style.opacity = 0;
        addIcon.innerHTML = "+";
        menu.style.position = "fixed";
        container.style.display = "flex";
    }

}