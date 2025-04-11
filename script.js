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
    targets: ".countdown-box",
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: 1000,
  });

  anime({
    targets: ".btn-primary",
    translateY: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: 1500,
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
    .forEach((section) => {
      observer.observe(section);
    });
  
  const countdownEl = document.getElementById("countdown");
  const countDownDate = new Date("Apr 12, 2025 08:00:00").getTime();

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(x);
      countdownEl.innerHTML =
        "<h3 class='font-weight-bold'>BEGIN CODING!</h3>";
      return;
    }

    const days = Math.floor(
      (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `
      <div class="time-box">
        <p class="h3 font-weight-bold">${days}</p>
        <p class="small">Days</p>
      </div>
      <div class="divider">:</div>
      <div class="time-box">
        <p class="h3 font-weight-bold">${hours}</p>
        <p class="small">Hours</p>
      </div>
      <div class="divider">:</div>
      <div class="time-box">
        <p class="h3 font-weight-bold">${minutes}</p>
        <p class="small">Minutes</p>
      </div>
      <div class="divider">:</div>
      <div class="time-box">
        <p class="h3 font-weight-bold">${seconds}</p>
        <p class="small">Seconds</p>
      </div>
    `;
  }, 1000);
});
