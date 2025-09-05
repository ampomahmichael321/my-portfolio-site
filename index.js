let hireMeBtn = document.querySelector(".hire-me-button");

hireMeBtn.addEventListener("click", () => {
  document
    .querySelector(".contact-section")
    .scrollIntoView({ behavior: "smooth" });
});

// Select all elements you want to animate on scroll
const animatedElements = document.querySelectorAll(
  ".landing-page, .about, .skills, .services, .contact-section,nav, div, a, input, label, .button, .services-grid"
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  { threshold: 0.5 }
);

animatedElements.forEach((div) => {
  observer.observe(div);
});
