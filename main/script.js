document.addEventListener("DOMContentLoaded", () => {
  // Hero Section Animation
  anime({
    targets: "#hero h1",
    translateY: [-100, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
  });

  anime({
    targets: "#hero p",
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: 500,
  });

  anime({
    targets: ".btn-primary",
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: 1000,
  });

  // Helper function for animation
  const animateInView = (target, index) => {
    anime({
      targets: target,
      opacity: [0, 1],
      translateY: [30, 0],
      easing: "easeOutQuad",
      duration: 2000, // Slower animation duration
      delay: index * 300,
    });
  };

  // Function to trigger animations when sections are in view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("animated")
        ) {
          // Add the 'animated' class to prevent re-triggering
          entry.target.classList.add("animated");
          animateInView(entry.target, index);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.5 }
  );

  document
    .querySelectorAll(".schedule-row, .accordion-item, #sponsors img")
    .forEach((section, index) => {
      observer.observe(section);
    });
});
