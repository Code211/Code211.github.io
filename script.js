const background = document.querySelector(".background-animation");
const content = document.querySelector(".content");

// Safe zone to prevent animation overlapping with text
function getSafeZone() {
  const rect = content.getBoundingClientRect();
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
  };
}

function createLine() {
  const line = document.createElement("div");
  const directions = ["vertical", "horizontal", "upward", "right-to-left"];
  const direction = directions[Math.floor(Math.random() * directions.length)];
  line.classList.add("line", direction);

  const safeZone = getSafeZone();

  if (direction === "vertical" || direction === "upward") {
    let x;
    do {
      x = Math.random() * window.innerWidth;
    } while (x > safeZone.left && x < safeZone.right);
    line.style.left = `${x}px`;
  } else {
    let y;
    do {
      y = Math.random() * window.innerHeight;
    } while (y > safeZone.top && y < safeZone.bottom);
    line.style.top = `${y}px`;
  }

  line.style.animationDuration = `${Math.random() * 3 + 2}s`;

  background.appendChild(line);
  setTimeout(() => {
    line.remove();
  }, 5000);
}

// Increase animation density
setInterval(() => {
  createLine();
  createLine();
}, 300);

