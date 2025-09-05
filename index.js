let hireMeBtn = document.querySelector(".hire-me-button");

hireMeBtn.addEventListener("click", () => {
  document
    .querySelector(".contact-section")
    .scrollIntoView({ behavior: "smooth" });
});

// Select all elements you want to animate on scroll
const animatedElements = document.querySelectorAll(
  ".landing-page, .about, .skills, .services, .contact-section,nav"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  },
  {
    threshold: 0.4, // Adjust as needed
  }
);

animatedElements.forEach((el) => observer.observe(el));
