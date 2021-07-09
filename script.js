const hamburgerBtn = document.getElementById("hamburber-btn");
const menuHamburger = document.getElementsByClassName("header__menu-hamburger");
var ex = 1;
hamburgerBtn.addEventListener("click", function() {
    menuHamburger[0].classList.toggle("active_hamburger");
});