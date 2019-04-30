/////// SCROLL TO TOP ///////

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 1000) {
  document.getElementById("top").style.opacity = 1;
  } else {
    document.getElementById("top").style.opacity = 0;
  }
    if (document.getElementById("pulloutMenu").style.left == "0px"){
      document.getElementById("top").style.opacity = 0;  
    }
}

var el = document.querySelector('#top-of-page');
el.scrollTop = el.scrollHeight;

setTimeout(function(){
  el.scrollTop = 0;
}, 500);


