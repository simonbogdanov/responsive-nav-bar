window.onscroll = function() {stickyNav();
    shrinkOnScroll();

};

var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");
var sticky = navbar.offsetTop;
var curtainMenu = document.getElementById("curtain-menu");
var screenSize = window.matchMedia('(min-width: 768px)');

function stickyNav() {
if (window.pageYOffset >= sticky && screenSize.matches) {
navbar.classList.add("navbar-fixed");

} else {
navbar.classList.remove("navbar-fixed");
}
}

function shrinkOnScroll() {
if (window.pageYOffset >= sticky + 160 && screenSize.matches) {
navbar.classList.add("navbar-shrink");
logo.classList.add("logo");
} else {
navbar.classList.remove("navbar-shrink");
logo.classList.remove("logo");
}
}

function curtain() {
curtainMenu.style.height = "100%";
}

function noCurtain() {
curtainMenu.style.height = "0%";
}