var imgs = document.querySelectorAll(".slider img");
var dots = document.querySelectorAll(".dot");
var currentImg = 0;
const interval = 3000;

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(" active", " ");
    }
    currentImg = n;

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += " active";
}

function Toggle() {
    var showpassword = document.getElementById("tog");
    if(showpassword.type === "password"){
        showpassword.type = "text";
    }
    else{
        showpassword.type = "password";
    }
}