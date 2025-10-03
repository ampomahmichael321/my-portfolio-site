const menuBtn = document.querySelector(".menu");
const hiddenMenu = document.querySelector(".hidden-menu");
const navLinks = document.querySelectorAll(".link");

AOS.init(); //Initialize animate on scroll library

menuBtn.addEventListener("click", () => {
  hiddenMenu.style.transform = "translateX(0)";
});
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  hiddenMenu.style.transform = "translateX(100%)";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hiddenMenu.style.transform = "translateX(100%)";
  });
});
AOS.init({
  once: false, // re-animate every time you scroll past
});
