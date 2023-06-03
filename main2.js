const menuHamMenu1 = document.querySelector(".menu1");
const mobileMenu = document.querySelector(".mobile-menu");

menuHamMenu1.addEventListener('click', toggleMobileMenu1);

function toggleMobileMenu1() {
    menuHamMenu1.classList.toggle("transform");
    mobileMenu.classList.toggle("inactive");
}