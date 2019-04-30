var what = document.querySelector("#what-is-cooki"),
    step1 = document.querySelector("#tutstep1"),
    step2 = document.querySelector("#tutstep2"),
    step3 = document.querySelector("#tutstep3");

// buttons
var prev = document.querySelectorAll(".tut-prev"),
    next = document.querySelectorAll(".tut-next"),
    circles = document.querySelectorAll(".circles");

function NextStep() {
    if (step1.style.display == "block" && what.style.display == "none") {
        what.style.display = "none";
        step1.style.display = "none";
        step2.style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        circles[0].style.backgroundColor = "#F8F8F9";
        circles[1].style.backgroundColor = "#F8F8F9";
        circles[2].style.backgroundColor = "grey";
        circles[3].style.backgroundColor = "#F8F8F9";
    } else if (step2.style.display == "block" && 
    step1.style.display == "none" && 
    what.style.display == "none") {
        what.style.display = "none";
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        next[0].style.display = "none";
        next[1].style.display = "block";
        circles[0].style.backgroundColor = "#F8F8F9";
        circles[1].style.backgroundColor = "#F8F8F9";
        circles[2].style.backgroundColor = "#F8F8F9";
        circles[3].style.backgroundColor = "grey";
    } else if (step3.style.display == "block" &&
     step2.style.display == "none" && 
     step1.style.display == "none" && 
     what.style.display == "none"){
         window.location.href = "index.html";
     }
    else {
        what.style.display = "none";
        step1.style.display = "block";
        step2.style.display = "none";
        prev[0].style.display = "none";
        prev[1].style.display = "block";
        circles[0].style.backgroundColor = "#F8F8F9";
        circles[1].style.backgroundColor = "grey";
        circles[2].style.backgroundColor = "#F8F8F9";
        circles[3].style.backgroundColor = "#F8F8F9";
    }
}

function PrevStep() {
    if (what.style.display == "none" && step1.style.display == "block") {
        what.style.display = "block";
        step1.style.display = "none";
        prev[0].style.display = "block";
        prev[1].style.display = "none";
        next[0].style.display = "block";
        next[1].style.display = "none";
        circles[0].style.backgroundColor = "grey";
        circles[1].style.backgroundColor = "#F8F8F9";
        circles[2].style.backgroundColor = "#F8F8F9";
        circles[3].style.backgroundColor = "#F8F8F9";
    } 
    if (what.style.display == "none" && step1.style.display == "none"
    && step2.style.display == "block") {
        what.style.display = "none";
        step1.style.display = "block";
        step2.style.display = "none";
        next[0].style.display = "block";
        next[1].style.display = "none";
        circles[0].style.backgroundColor = "#F8F8F9";
        circles[1].style.backgroundColor = "grey";
        circles[2].style.backgroundColor = "#F8F8F9";
        circles[3].style.backgroundColor = "#F8F8F9";
    } 
    if (what.style.display == "none" && step1.style.display == "none"
    && step2.style.display == "none" && step3.style.display == "block") {
        what.style.display = "none";
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        next[0].style.display = "block";
        next[1].style.display = "none";
        circles[0].style.backgroundColor = "#F8F8F9";
        circles[1].style.backgroundColor = "#F8F8F9";
        circles[2].style.backgroundColor = "grey";
        circles[3].style.backgroundColor = "#F8F8F9";
    } 

}