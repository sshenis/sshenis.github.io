var cotdcookies = {
    title: [

        "Chewy Chocolate Brownie Cookies",

        "Minty Chocolate Cookies",

        "Ultimate Chocolate Cookies",

        "Soft And Chewy Chocolate Cookies",

        "Thick and Fudgy Double Chocolate",

        "Chocolate Orange Brownie Cookies",

        "White Chocolate Macadamia Cookies",

        "Chocolate Peanut Butter Cookies",
    ],
    img: [
        "chewy-chocolate",
        "minty-chocolate",
        "ultimate-chocolate",
        "soft-chocolate",
        "fudgy-chocolate",
        "fruits-chocolate",
        "nuts-chocolate",
        "peanut-butter-chocolate"
    ],
    previewdesc: [

        "These intensely yummy chocolate chocolate chip cookies with walnuts are essentially chocolate browniesmade in drop cookie form, hence the title Chocolate Brownie Cookies. They are thick, soft cookies and while ",

        "For all fans of mint and chocolate, have I got the cookie for you. They are like Christmas in your mouth. In fact, with the rich smell of these tasty treats baking in the oven, it took all my strength to keep my Christmas boxes in the ",

        "When I am craving a chocolate cookie, I want a <i>chocolate</i> cookie. I don’t want a hint of chocolate, I want a cookie that is loaded with chocolate. I don’t hold back the ",

        "These cookies have been a family staple for as long as I can remember. We use them to make ice cream sandwiches, sometimes they’re topped with marshmallows ",

        "These cookies are my chocolate dreams coming true right in front of my face. They turned out completely different than what I thought they were going to be ",

        "Chocolate Orange BROWNIE Cookies, to be exact. They’re rich, chewy, and SO chocolatey. The fresh pop of orange balances everything out and adds an incredibly unique and intriguing flavour profile ",

        "These Chocolate White Chocolate Macadamia Nut Cookies are extra rich, extra chocolatey, and extra good! Double Chocolate Chip Cookies meet White Chocolate Macadamia Nut Cookies for a match made in chocolate cookie heaven! These ",

        "These are the ultimate chocolate peanut butter cookies because they are loaded with goodness. The rich and decadent chocolate cookies have peanut butter cups, peanut butter chips, and "
    ]
};

var cc = cotdcookies.title.length;
var ccx = Math.round(cc * Math.random());

function cotdRecipe() {

    if (ccx > 7) {
        ccx = 0;
    }
    if (ccx < 0) {
        ccx = 7;
    }

    document.querySelector(".title").innerHTML = cotdcookies.title[ccx];
    document.querySelector(".recipe").innerHTML = cotdcookies.previewdesc[ccx];
    document.querySelector(".recipe-display").innerHTML =
        '<img class="recipe-img" src="imgs/recipes/chocolate/' + cotdcookies.img[ccx] + '/preview-img.png">';

}

// function varRecipe() {

//     ccx++;
//     if (ccx > 7) {
//         ccx = 0;
//     }
//     if (ccx < 0) {
//         ccx = 7;
//     }

//     document.querySelector(".var-title").innerHTML = cotdcookies.title[ccx];
//     // document.querySelector(".var-recipe").innerHTML = cotdcookies.previewdesc[ccx];
//     document.querySelector(".var-recipe-display").innerHTML =
//         '<img class="recipe-img" src="imgs/recipes/chocolate/' + cotdcookies.img[ccx] + '/preview-img.png">';

// }

// function loop() {
//     var title = document.querySelector(".title"),
//     recipe = document.querySelector(".recipe"),
//     recipedisplay = document.querySelector(".recipe-display");
//     for (i = 0; i < cotdcookies.length; i++) {
//         title.appendChild(cotdcookies[i]);
//         recipe.appendChild(cotdcookies[i]);
//         recipedisplay.appendChild(cotdcookies[i]);
//     }
// }

function Unavailable(){
    alert("Sorry, this feature is currently unavailable. You can access all recipes through our menu or by clicking 'Read More' right now.")
}