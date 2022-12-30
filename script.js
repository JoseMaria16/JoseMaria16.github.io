document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("close_menu").addEventListener("click", ocultar_menu);


nav = document.getElementById("navbar");
close_menu = document.getElementById("close_menu");

function mostrar_menu(){

    nav.style.right = "0px";
  

}
function ocultar_menu(){

    nav.style.right = "-75%"
   

};


var swiper = new Swiper(".product-slider", {
  loop: false,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

