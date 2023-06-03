let close = document.querySelector(".close");
let abrir = document.querySelector(".cta");
let modal = document.querySelector(".modal");
let modalc = document.querySelector(".modal-container");


abrir.addEventListener('click', function (e) {
  e.preventDefault();
  modalc.style.opacity = "1"
  modalc.style.visibility = "visible"
  modal.classList.toggle("modal-close")

});


close.addEventListener("click", function () {
  modal.classList.toggle("modal-close")
  setTimeout(function () {
    modalc.style.opacity = "0"
    modalc.style.visibility = "hidden"

  }, 600)

});



window.addEventListener("click",function(e){
  
  if(e.target == modalc){

    modal.classList.toggle("modal-close")
    setTimeout(function () {
      modalc.style.opacity = "0"
      modalc.style.visibility = "hidden"
  
    }, 600)

  }


});
