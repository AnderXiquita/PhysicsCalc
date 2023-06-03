document.querySelector(".bars-menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".bars-menu__span1");
var line2__bars = document.querySelector(".bars-menu__span2");
var line3__bars = document.querySelector(".bars-menu__span3");
var nav = document.getElementById("nav");

function animateBars() {
    line1__bars.classList.toggle("bars-menu__activeline1");
    line2__bars.classList.toggle("bars-menu__activeline2");
    line3__bars.classList.toggle("bars-menu__activeline3");
    nav.classList.toggle("bars-menu__nav--active");
}






let listElements = document.querySelectorAll('.nav__a');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        listElement.classList.toggle('arrow');


        let menu = listElement.nextElementSibling;



        if (menu.clientHeight != "0") {
            menu.style.display = `none`;
            menu.style.height = `0`;
        } else {
            menu.style.display = `flex`;
            menu.style.height = `auto`;


        }



    })
});


// Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
    }

}