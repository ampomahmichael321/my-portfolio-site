const menuBtn = document.querySelector(".menu");
const hiddenMenu = document.querySelector(".hidden-menu");
menuBtn.addEventListener("click", () => {
  hiddenMenu.style.display = "flex";
});
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  hiddenMenu.style.display = "none";
});
