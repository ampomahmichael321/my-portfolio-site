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
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // stop observing after first trigger
      }
    });
  },
  { threshold: 0.5 }
);

animatedElements(".animated-div").forEach((div) => {
  observer.observe(div);
});
