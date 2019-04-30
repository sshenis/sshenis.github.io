//--------------- STATE VARS ---------------//
var pkg = {
    Vanilla: "",
    Chocolate: "",
    Shortbread: "",
    Chocochips: "",
    Fruits: "",
    Nuts: "",
    OneDoz: "",
    TwoDoz: "",
    ThreeDoz: ""
}



// display image
var vanilla = document.querySelector("#vanilla"),
    chocolate = document.querySelector("#chocolate"),
    shortbread = document.querySelector("#shortbread"),
    shadow = document.querySelector("#shadow"),
    next = document.querySelector("#byoc-next"),
    flavours = document.querySelectorAll(".flavours"),
    chosenflav = document.querySelectorAll(".chosen-flavour");





//--------------- PROXY ---------------//
var handler = {
    set: function (obj, props, value) {

        if (props == "Vanilla") {
            ShowVanillaUI(value)
        }
        if (props == "Chocolate") {
            ShowChocolateUI(value)
        }
        if (props == "Shortbread") {
            ShowShortbreadUI(value)
        }
        if (props == "Chocochips") {
            ShowChocochipsUI(value)
        }
        if (props == "Fruits") {
            ShowFruitsUI(value)
        }
        if (props == "Nuts") {
            ShowNutsUI(value)
        }
        if (props == "OneDoz") {
            ShowOneDozUI(value)
        }
        if (props == "TwoDoz") {
            ShowTwoDozUI(value)
        }
        if (props == "ThreeDoz") {
            ShowThreeDozUI(value)
        }
    }
}

var prox = new Proxy(pkg, handler);




//--------------- CHANGE STATE ---------------//
function ShowVanilla(el) {
    pkg.Vanilla = el.Vanilla;
    prox.Vanilla = pkg.Vanilla;
}

function ShowChocolate(el) {
    pkg.Chocolate = el.Chocolate;
    prox.Chocolate = pkg.flavour;
}

function ShowShortbread(el) {
    pkg.Shortbread = el.Shortbread;
    prox.Shortbread = pkg.Shortbread;
}

function ShowChocochips(el) {
    pkg.Chocochips = el.Chocochips;
    prox.Chocochips = pkg.Chocochips;
}

function ShowFruits(el) {
    pkg.Fruits = el.Fruits;
    prox.Fruits = pkg.Fruits;
}

function ShowNuts(el) {
    pkg.Nuts = el.Nuts;
    prox.Nuts = pkg.Nuts;
}

function ShowOneDoz(el) {
    pkg.OneDoz = el.OneDoz;
    prox.OneDoz = pkg.OneDoz;
}

function ShowTwoDoz(el) {
    pkg.TwoDoz = el.TwoDoz;
    prox.TwoDoz = pkg.TwoDoz;
}

function ShowThreeDoz(el) {
    pkg.ThreeDoz = el.ThreeDoz;
    prox.ThreeDoz = pkg.ThreeDoz;
}





//--------------- CHANGE UI ---------------//
function ShowVanillaUI(val) {
    vanilla.style.display = "block";
    vanilla.style.opacity = 1;
    shortbread.style.opacity = 0;
    chocolate.style.opacity = 0;
    shadow.style.opacity = 1;
}

function ShowChocolateUI(val) {
    vanilla.style.opacity = 0;
    shortbread.style.opacity = 0;
    chocolate.style.opacity = 1;
    shadow.style.opacity = 1;
}

function ShowShortbreadUI(val) {
    vanilla.style.opacity = 0;
    shortbread.style.opacity = 1;
    chocolate.style.opacity = 0;
    shadow.style.opacity = 1;
}

function ShowChocochipsUI(val) {
    chocochips.style.opacity = 1;
    fruits.style.opacity = 0;
    nuts.style.opacity = 0;
    shadow.style.opacity = 1;
    next[1].style.backgroundColor = "#57b2b0";
}

function ShowFruitsUI(val) {
    chocochips.style.opacity = 0;
    fruits.style.opacity = 1;
    nuts.style.opacity = 0;
    shadow.style.opacity = 1;
    next[1].style.backgroundColor = "#57b2b0";
}

function ShowNutsUI(val) {
    chocochips.style.opacity = 0;
    fruits.style.opacity = 0;
    nuts.style.opacity = 1;
    shadow.style.opacity = 1;
    next[1].style.backgroundColor = "#57b2b0";
}

function ShowOneDozUI(val) {
    onedoz.style.opacity = 1;
    twodoz.style.opacity = 0;
    threedoz.style.opacity = 0;


    //vanilla + choco
    if (onedoz.style.opacity == 1 &&
        vanilla.style.opacity == 1 &&
        chocochips.style.opacity == 1) {
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rvanilla.style.opacity = 1;
        lvanilla.style.opacity = 1;
        rchocochips.style.opacity = 1;
        lchocochips.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //vanilla + fruits
    if (onedoz.style.opacity == 1 &&
        vanilla.style.opacity == 1 &&
        fruits.style.opacity == 1) {
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rvanilla.style.opacity = 1;
        lvanilla.style.opacity = 1;
        rfruit.style.opacity = 1;
        lfruit.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //vanilla + nuts 
    if (onedoz.style.opacity == 1 &&
        vanilla.style.opacity == 1 &&
        nuts.style.opacity == 1) {
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rvanilla.style.opacity = 1;
        lvanilla.style.opacity = 1;
        rnut.style.opacity = 1;
        lnut.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }

    //chocolate + choco
    if (onedoz.style.opacity == 1 &&
        chocolate.style.opacity == 1 &&
        chocochips.style.opacity == 1) {
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rchoco.style.opacity = 1;
        lchoco.style.opacity = 1;
        rchocochips.style.opacity = 1;
        lchocochips.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //chocolate + fruits
    if (onedoz.style.opacity == 1 &&
        chocolate.style.opacity == 1 &&
        fruits.style.opacity == 1) {
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rchoco.style.opacity = 1;
        lchoco.style.opacity = 1;
        rfruit.style.opacity = 1;
        lfruit.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //chocolate + nuts 
    if (onedoz.style.opacity == 1 &&
        chocolate.style.opacity == 1 &&
        nuts.style.opacity == 1) {
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rchoco.style.opacity = 1;
        lchoco.style.opacity = 1;
        rnut.style.opacity = 1;
        lnut.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }

    //shortbread + choco
    if (onedoz.style.opacity == 1 &&
        shortbread.style.opacity == 1 &&
        chocochips.style.opacity == 1) {
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rshortbread.style.opacity = 1;
        lshortbread.style.opacity = 1;
        rchocochips.style.opacity = 1;
        lchocochips.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //shortbread + fruits
    if (onedoz.style.opacity == 1 &&
        shortbread.style.opacity == 1 &&
        fruits.style.opacity == 1) {
        quantity_1.style.opacity = 1;
        twocookies.style.opacity = 0;
        rshortbread.style.opacity = 1;
        lshortbread.style.opacity = 1;
        rfruit.style.opacity = 1;
        lfruit.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //shortbread + nuts 
    if (onedoz.style.opacity == 1 &&
        shortbread.style.opacity == 1 &&
        nuts.style.opacity == 1) {
        quantity_1.style.opacity = 1;
        twocookies.style.opacity = 0;
        rshortbread.style.opacity = 1;
        lshortbread.style.opacity = 1;
        rnut.style.opacity = 1;
        lnut.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
}

function ShowTwoDozUI(val) {
    onedoz.style.opacity = 0;
    twodoz.style.opacity = 1;
    threedoz.style.opacity = 0;

    //vanilla + choco
    if (twodoz.style.opacity == 1 &&
        vanilla.style.opacity == 1 &&
        chocochips.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 0;
        rvanilla.style.opacity = 1;
        lvanilla.style.opacity = 1;
        rchocochips.style.opacity = 1;
        lchocochips.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //vanilla + fruits
    if (twodoz.style.opacity == 1 &&
        vanilla.style.opacity == 1 &&
        fruits.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 0;
        rvanilla.style.opacity = 1;
        lvanilla.style.opacity = 1;
        rfruit.style.opacity = 1;
        lfruit.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //vanilla + nuts 
    if (twodoz.style.opacity == 1 &&
        vanilla.style.opacity == 1 &&
        nuts.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 0;
        rvanilla.style.opacity = 1;
        lvanilla.style.opacity = 1;
        rnut.style.opacity = 1;
        lnut.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }

    //chocolate + choco
    if (twodoz.style.opacity == 1 &&
        chocolate.style.opacity == 1 &&
        chocochips.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 0;
        rchoco.style.opacity = 1;
        lchoco.style.opacity = 1;
        rchocochips.style.opacity = 1;
        lchocochips.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //chocolate + fruits
    if (twodoz.style.opacity == 1 &&
        chocolate.style.opacity == 1 &&
        fruits.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 0;
        rchoco.style.opacity = 1;
        lchoco.style.opacity = 1;
        rfruit.style.opacity = 1;
        lfruit.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //chocolate + nuts 
    if (twodoz.style.opacity == 1 &&
        chocolate.style.opacity == 1 &&
        nuts.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 0;
        rchoco.style.opacity = 1;
        lchoco.style.opacity = 1;
        rnut.style.opacity = 1;
        lnut.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }

    //shortbread + choco
    if (twodoz.style.opacity == 1 &&
        shortbread.style.opacity == 1 &&
        chocochips.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 0;
        rshortbread.style.opacity = 1;
        lshortbread.style.opacity = 1;
        rchocochips.style.opacity = 1;
        lchocochips.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //shortbread + fruits
    if (twodoz.style.opacity == 1 &&
        shortbread.style.opacity == 1 &&
        fruits.style.opacity == 1) {
        quantity_1.style.opacity = 0;
        twocookies.style.opacity = 1;
        rshortbread.style.opacity = 1;
        lshortbread.style.opacity = 1;
        rfruit.style.opacity = 1;
        lfruit.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //shortbread + nuts 
    if (twodoz.style.opacity == 1 &&
        shortbread.style.opacity == 1 &&
        nuts.style.opacity == 1) {
        quantity_1.style.opacity = 0;
        twocookies.style.opacity = 1;
        rshortbread.style.opacity = 1;
        lshortbread.style.opacity = 1;
        rnut.style.opacity = 1;
        lnut.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }

}

function ShowThreeDozUI(val) {
    onedoz.style.opacity = 0;
    twodoz.style.opacity = 0;
    threedoz.style.opacity = 1;

    //vanilla + choco
    if (threedoz.style.opacity == 1 &&
        vanilla.style.opacity == 1 &&
        chocochips.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 1;
        rvanilla.style.opacity = 1;
        lvanilla.style.opacity = 1;
        rchocochips.style.opacity = 1;
        lchocochips.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //vanilla + fruits
    if (threedoz.style.opacity == 1 &&
        vanilla.style.opacity == 1 &&
        fruits.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 1;
        rvanilla.style.opacity = 1;
        lvanilla.style.opacity = 1;
        rfruit.style.opacity = 1;
        lfruit.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //vanilla + nuts 
    if (threedoz.style.opacity == 1 &&
        vanilla.style.opacity == 1 &&
        nuts.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 1;
        rvanilla.style.opacity = 1;
        lvanilla.style.opacity = 1;
        rnut.style.opacity = 1;
        lnut.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }

    //chocolate + choco
    if (threedoz.style.opacity == 1 &&
        chocolate.style.opacity == 1 &&
        chocochips.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 1;
        rchoco.style.opacity = 1;
        lchoco.style.opacity = 1;
        rchocochips.style.opacity = 1;
        lchocochips.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //chocolate + fruits
    if (threedoz.style.opacity == 1 &&
        chocolate.style.opacity == 1 &&
        fruits.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 1;
        rchoco.style.opacity = 1;
        lchoco.style.opacity = 1;
        rfruit.style.opacity = 1;
        lfruit.style.opacity = 1;
    }
    //chocolate + nuts 
    if (threedoz.style.opacity == 1 &&
        chocolate.style.opacity == 1 &&
        nuts.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 1;
        rchoco.style.opacity = 1;
        lchoco.style.opacity = 1;
        rnut.style.opacity = 1;
        lnut.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }

    //shortbread + choco
    if (threedoz.style.opacity == 1 &&
        shortbread.style.opacity == 1 &&
        chocochips.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 1;
        rshortbread.style.opacity = 1;
        lshortbread.style.opacity = 1;
        rchocochips.style.opacity = 1;
        lchocochips.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }
    //shortbread + fruits
    if (threedoz.style.opacity == 1 &&
        shortbread.style.opacity == 1 &&
        fruits.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 1;
        rshortbread.style.opacity = 1;
        lshortbread.style.opacity = 1;
        rfruit.style.opacity = 1;
        lfruit.style.opacity = 1;
    }
    //shortbread + nuts 
    if (threedoz.style.opacity == 1 &&
        shortbread.style.opacity == 1 &&
        nuts.style.opacity == 1) {
        twocookies.style.opacity = 1;
        quantity_1.style.opacity = 1;
        rshortbread.style.opacity = 1;
        lshortbread.style.opacity = 1;
        rnut.style.opacity = 1;
        lnut.style.opacity = 1;
        next[2].style.backgroundColor = "#57b2b0";
    }

}




//------------- NEXT BUTTONS -------------//
var step1 = document.querySelector(".step1"),
    step2 = document.querySelector(".step2"),
    step3 = document.querySelector(".step3"),
    next = document.querySelectorAll(".byoc-next"),
    prev = document.querySelectorAll(".byoc-prev"),
    quantity_1 = document.querySelector("#Quantity_1"),
    headfont = document.querySelector(".headfont"),
    circles = document.querySelectorAll(".circles");;



//---------- Step 1 ----------//
function NextAppears() {
    next[0].style.display = "block";
    next[1].style.display = "none";
    next[2].style.display = "none";
    next[3].style.display = "none";
}

function NextTopping() {
    // vanilla is chosen
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0) {
        vanilla.style.opacity = 1;
        quantity_1.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
        // 
        //   
        //  
    }
    // chocolate is chosen
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0) {
        chocolate.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";

    }
    // shortbread is chosen 
    if (chocolate.style.opacity == 0 &&
        vanilla.style.opacity == 0) {
        shortbread.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
    }
}



//---------- Step 2 ----------//
var chocochips = document.querySelector("#chocolatechips"),
    nuts = document.querySelector("#nuts"),
    fruits = document.querySelector("#fruit");


function NextAppears2() {
    next[0].style.display = "none";
    next[1].style.display = "block";
    next[2].style.display = "none";
    next[3].style.display = "none";
    next[4].style.display = "none";
}

function NextQuantity() {
    // vanilla + chocolate chips 
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0) {
        chocochips.style.opacity = 1;
        vanilla.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "none";
        prev[2].style.display = "block";



    }
    // vanilla +  fruits 
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0) {
        fruits.style.opacity = 1;
        vanilla.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "none";
        prev[2].style.display = "block";



    }
    // vannilla + nuts 
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        fruits.style.opacity == 0) {
        nuts.style.opacity = 1;
        vanilla.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "none";
        prev[2].style.display = "block";



    }

    // chocolate + chocolate chips
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0) {
        chocochips.style.opacity = 1;
        chocolate.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "none";
        prev[2].style.display = "block";



    }
    // chocolate + fruits 
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0) {
        fruits.style.opacity = 1;
        chocolate.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "none";
        prev[2].style.display = "block";



    }

    // chocolate + nuts 
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        fruits.style.opacity == 0) {
        nuts.style.opacity = 1;
        chocolate.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "none";
        prev[2].style.display = "block";



    }


    // shortbread + chocochips
    if (chocolate.style.opacity == 0 &&
        vanilla.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0) {
        chocochips.style.opacity = 1;
        shortbread.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "none";
        prev[2].style.display = "block";



    }
    // shortbread + fruits
    if (chocolate.style.opacity == 0 &&
        vanilla.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0) {
        fruits.style.opacity = 1;
        shortbread.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "none";
        prev[2].style.display = "block";



    }
    // shortbread + nuts 
    if (chocolate.style.opacity == 0 &&
        vanilla.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        fruits.style.opacity == 0) {
        nuts.style.opacity = 1;
        shortbread.style.opacity = 1;
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        next[0].style.display = "none";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "none";
        prev[2].style.display = "block";



    }
}

function backToFlavour() {
    // vanilla is chosen
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0) {
        vanilla.style.opacity = 1;
        chocochips.style.opacity = 0;
        fruits.style.opacity = 0;
        nuts.style.opacity = 0;
        step1.style.display = "block";
        step2.style.display = "none";
        step3.style.display = "none";
        next[0].style.display = "block";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[3].style.display = "none";
        prev[0].style.display = "block";
        prev[1].style.display = "none";
        prev[2].style.display = "none";


    }
    // chocolate is chosen
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0) {
        chocolate.style.opacity = 1;
        chocochips.style.opacity = 0;
        fruits.style.opacity = 0;
        nuts.style.opacity = 0;
        step1.style.display = "block";
        step2.style.display = "none";
        step3.style.display = "none";
        next[0].style.display = "block";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        prev[0].style.display = "block";
        prev[1].style.display = "none";
        prev[2].style.display = "none";


    }
    // shortbread is chosen
    if (chocolate.style.opacity == 0 &&
        vanilla.style.opacity == 0) {
        shortbread.style.opacity = 1;
        chocochips.style.opacity = 0;
        fruits.style.opacity = 0;
        nuts.style.opacity = 0;
        step1.style.display = "block";
        step2.style.display = "none";
        step3.style.display = "none";
        next[0].style.display = "block";
        next[1].style.display = "none";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        prev[0].style.display = "block";
        prev[1].style.display = "none";
        prev[2].style.display = "none";


    }
}



//---------- Step 3 ----------//
var onedoz = document.querySelector("#X1"),
    twodoz = document.querySelector("#X2"),
    threedoz = document.querySelector("#X3"),
    twocookies = document.querySelector("#Quantity_2"),
    rchoco = document.querySelector("#R_chocolate"),
    lchoco = document.querySelector("#L_chocolate"),
    rvanilla = document.querySelector("#R_vanilla"),
    lvanilla = document.querySelector("#L_vanilla"),
    rshortbread = document.querySelector("#R_shortbread"),
    lshortbread = document.querySelector("#L_shortbread"),
    // toppings
    rchocochips = document.querySelector("#R_chocolatechips"),
    lchocochips = document.querySelector("#L_chocolatechips"),
    rfruit = document.querySelector("#R_fruit"),
    lfruit = document.querySelector("#L_fruit"),
    rnut = document.querySelector("#R_nuts"),
    lnut = document.querySelector("#L_nuts"),
    // generating
    generating = document.querySelector("#generating-recipe"),
    interface = document.querySelector("#byoc-interface");


// Generate Recipe

function NextAppears3() {
    next[0].style.display = "none";
    next[1].style.display = "none";
    next[2].style.display = "block";
    next[3].style.display = "none";
    next[4].style.display = "none";
    next[5].style.display = "none";
}

function GenerateVanillaRecipe() {
    // 1 DOZ Vanilla + Choco chips
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        twodoz.style.opacity == 0) {
        generating.style.zIndex = "100";
        generating.style.display = "block";
        interface.style.zIndex = "-100";
        interface.style.position = "absolute";
        interface.style.marginTop = "-1600px";
        setTimeout(function () {
            generateVan();
        }, 1000);
    }
    // 2 DOZ Vanilla + Choco chips
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        twodoz.style.opacity == 0) {

    }
    // 3 DOZ Vanilla + Choco chips
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        threedoz.style.opacity == 0) {

    }

    // 1 DOZ Vanilla + Fruits
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        twodoz.style.opacity == 0) {
            generating.style.zIndex = "100";
            generating.style.display = "block";
            interface.style.zIndex = "-100";
            interface.style.position = "absolute";
            interface.style.marginTop = "-1600px";
            setTimeout(function () {
                generateVan();
            }, 1000);
    }
    // 2 DOZ Vanilla + Fruits
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        twodoz.style.opacity == 0) {

    }
    // 3 DOZ Vanilla + Fruits
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        threedoz.style.opacity == 0) {
        
    }

    // 1 DOZ Vanilla + Nuts
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        twodoz.style.opacity == 0) {
          generating.style.zIndex = "100";
          generating.style.display = "block";
          interface.style.zIndex = "-100";
          interface.style.position = "absolute";
          interface.style.marginTop = "-1600px";
          setTimeout(function () {
              generateVan();
          }, 1000);
    }
    // 2 DOZ Vanilla + Nuts
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        twodoz.style.opacity == 0) {

    }
    // 3 DOZ Vanilla + Nuts
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        threedoz.style.opacity == 0) {

    }
}

function GenerateChocoRecipe() {
    // 1 DOZ Chocolate + Choco chips
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        onedoz.style.opacity == 0) {

    }
    // 2 DOZ Chocolate + Choco chips
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        twodoz.style.opacity == 0) {

    }
    // 3 DOZ Chocolate + Choco chips
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        threedoz.style.opacity == 0) {

    }

    // 1 DOZ Chocolate + Fruits
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        threedoz.style.opacity == 0 &&
        twodoz.style.opacity == 0) {

    }

    // 2 DOZ Chocolate + Fruits
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        quantity_1.style.opacity == 0) {

    }
    // 3 DOZ Chocolate + Fruits
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        threedoz.style.opacity == 0) {

    }

    // 1 DOZ Chocolate + Nuts
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        onedoz.style.opacity == 0) {

    }
    // 2 DOZ Chocolate + Nuts
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        twodoz.style.opacity == 0) {

    }
    // 3 DOZ Chocolate + Nuts
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        threedoz.stysle.opacity == 0) {

    }

}


function GenerateSBRecipe() {
    // 1 DOZ SB + Choco chips
    if (vanilla.style.opacity == 0 &&
        chocolate.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        onedoz.style.opacity == 0) {

    }
    // 2 DOZ 
    if (vanilla.style.opacity == 0 &&
        chocolate.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        twodoz.style.opacity == 0) {

    }
    // 3 DOZ 
    if (vanilla.style.opacity == 0 &&
        chocolate.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        threedoz.style.opacity == 0) {

    }

    // 1 DOZ SB + Fruits
    if (vanilla.style.opacity == 0 &&
        chocolate.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        onedoz.style.opacity == 0) {

    }
    // 2 DOZ 
    if (vanilla.style.opacity == 0 &&
        chocolate.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        twodoz.style.opacity == 0) {

    }
    // 3 DOZ 
    if (vanilla.style.opacity == 0 &&
        chocolate.style.opacity == 0 &&
        nuts.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        threedoz.style.opacity == 0) {

    }

    // 1 DOZ SB + Nuts
    if (vanilla.style.opacity == 0 &&
        chocolate.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        onedoz.style.opacity == 0) {

    }
    // 2 DOZ 
    if (vanilla.style.opacity == 0 &&
        chocolate.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        twodoz.style.opacity == 0) {

    }
    // 3 DOZ 
    if (vanilla.style.opacity == 0 &&
        chocolate.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        threedoz.style.opacity == 0) {

    }
}

function backToToppings() {
    // vanilla + choco chips is chosen
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        nuts.style.opacity == 0) {
        vanilla.style.opacity = 1;
        chocochips.style.opacity = 1;
        onedoz.style.opacity = 0;
        twodoz.style.opacity = 0;
        threedoz.style.opacity = 0;
        threedoz.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "block";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "none";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rvanilla.style.opacity = 0;
        lvanilla.style.opacity = 0;
        rchocochips.style.opacity = 0;
        lchocochips.style.opacity = 0;



    }
    // vanilla + fruits is chosen
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        nuts.style.opacity == 0) {
        vanilla.style.opacity = 1;
        fruits.style.opacity = 1;
        onedoz.style.opacity = 0;
        twodoz.style.opacity = 0;
        threedoz.style.opacity = 0;
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "block";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "none";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rvanilla.style.opacity = 0;
        lvanilla.style.opacity = 0;
        rfruit.style.opacity = 0;
        lfruit.style.opacity = 0;



    }
    // vanilla + nuts is chosen
    if (chocolate.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        fruits.style.opacity == 0) {
        vanilla.style.opacity = 1;
        nuts.style.opacity = 1;
        onedoz.style.opacity = 0;
        twodoz.style.opacity = 0;
        threedoz.style.opacity = 0;
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "block";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "none";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rvanilla.style.opacity = 0;
        lvanilla.style.opacity = 0;
        rnut.style.opacity = 0;
        lnut.style.opacity = 0;



    }


    // chocolate + choco chips is chosen
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        nuts.style.opacity == 0) {
        chocolate.style.opacity = 1;
        chocochips.style.opacity = 1;
        onedoz.style.opacity = 0;
        twodoz.style.opacity = 0;
        threedoz.style.opacity = 0;
        threedoz.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "block";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "none";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rchoco.style.opacity = 0;
        lchoco.style.opacity = 0;
        rchocochips.style.opacity = 0;
        lchocochips.style.opacity = 0;



    }
    // chocolate + fruits is chosen
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        nuts.style.opacity == 0) {
        chocolate.style.opacity = 1;
        fruits.style.opacity = 1;
        onedoz.style.opacity = 0;
        twodoz.style.opacity = 0;
        threedoz.style.opacity = 0;
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "block";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "none";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rchoco.style.opacity = 0;
        lchoco.style.opacity = 0;
        rfruit.style.opacity = 0;
        lfruit.style.opacity = 0;



    }
    // chocolate + nuts is chosen
    if (vanilla.style.opacity == 0 &&
        shortbread.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        fruits.style.opacity == 0) {
        chocolate.style.opacity = 1;
        nuts.style.opacity = 1;
        onedoz.style.opacity = 0;
        twodoz.style.opacity = 0;
        threedoz.style.opacity = 0;
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "block";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "none";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rchoco.style.opacity = 0;
        lchoco.style.opacity = 0;
        rnut.style.opacity = 0;
        lnut.style.opacity = 0;



    }


    // shortbread + choco chips is chosen
    if (chocolate.style.opacity == 0 &&
        vanilla.style.opacity == 0 &&
        fruits.style.opacity == 0 &&
        nuts.style.opacity == 0) {
        shortbread.style.opacity = 1;
        chocochips.style.opacity = 1;
        onedoz.style.opacity = 0;
        twodoz.style.opacity = 0;
        threedoz.style.opacity = 0;
        threedoz.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "block";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "none";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rshortbread.style.opacity = 0;
        lshortbread.style.opacity = 0;
        rchocochips.style.opacity = 0;
        lchocochips.style.opacity = 0;



    }
    // shortbread + fruits is chosen
    if (chocolate.style.opacity == 0 &&
        vanilla.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        nuts.style.opacity == 0) {
        shortbread.style.opacity = 1;
        fruits.style.opacity = 1;
        onedoz.style.opacity = 0;
        twodoz.style.opacity = 0;
        threedoz.style.opacity = 0;
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "block";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "none";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rshortbread.style.opacity = 0;
        lshortbread.style.opacity = 0;
        rfruit.style.opacity = 0;
        lfruit.style.opacity = 0;



    }
    // shortbread + nuts is chosen
    if (chocolate.style.opacity == 0 &&
        vanilla.style.opacity == 0 &&
        chocochips.style.opacity == 0 &&
        fruits.style.opacity == 0) {
        shortbread.style.opacity = 1;
        nuts.style.opacity = 1;
        onedoz.style.opacity = 0;
        twodoz.style.opacity = 0;
        threedoz.style.opacity = 0;
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "none";
        next[1].style.display = "block";
        next[2].style.display = "none";
        next[3].style.display = "none";
        next[4].style.display = "none";
        next[5].style.display = "none";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        prev[2].style.display = "none";
        twocookies.style.opacity = 0;
        quantity_1.style.opacity = 1;
        rshortbread.style.opacity = 0;
        lshortbread.style.opacity = 0;
        rnut.style.opacity = 0;
        lnut.style.opacity = 0;



    }

}