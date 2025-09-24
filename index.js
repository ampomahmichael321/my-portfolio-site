const menuBtn = document.querySelector(".menu");
const hiddenMenu = document.querySelector(".hidden-menu");
const navLinks = document.querySelectorAll(".link");

AOS.init();//Initialize animate on scroll library

const serviceCards = document.querySelectorAll(".service");
serviceCards.forEach(service =>{
    service.setAttribute("data-aos", "fade-up");
  service.setAttribute("data-aos-duration", "1500")
})

menuBtn.addEventListener("click", () => {
  hiddenMenu.style.transform = "translateX(0)";
});
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  hiddenMenu.style.transform = "translateX(100%)";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hiddenMenu.style.transform = "translateX(100%)";
  });
});




