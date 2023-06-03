const main = document.querySelector(".main");
const menuHamMenu = document.querySelector(".menu");

const mobileMenu = document.querySelector(".mobile-menu");


menuHamMenu.addEventListener('click', toggleMobileMenu);



function toggleMobileMenu() {
    menuHamMenu.classList.toggle("transform");
    mobileMenu.classList.toggle("inactive");
}

function toggleMobileMenu1() {
    menuHamMenu1.classList.toggle("transform");
    mobileMenu.classList.toggle("inactive");
}












