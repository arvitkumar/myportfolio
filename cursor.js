// Custom Cursor
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  // Check if device doesn't support hover (likely a touch device)
  if (window.matchMedia("(hover: none)").matches) {
    cursor.style.display = "none";
    cursorFollower.style.display = "none";
    return;
  }

  let posX = 0,
    posY = 0;
  let mouseX = 0,
    mouseY = 0;

  // Smoothing factor (lower = smoother)
  const speed = 0.1;

  function animateCursor() {
    // Calculate distance from current position to mouse position
    const distX = mouseX - posX;
    const distY = mouseY - posY;

    // Ease the movement
    posX += distX * speed;
    posY += distY * speed;

    // Apply the new positions
    cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    cursorFollower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

    requestAnimationFrame(animateCursor);
  }

  // Start the animation
  animateCursor();

  // Update mouse position
  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Cursor effects on hover
  const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .skill-card, .menu-toggle"
  );

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      cursor.classList.add("active");
      cursorFollower.classList.add("active");
    });

    element.addEventListener("mouseleave", function () {
      cursor.classList.remove("active");
      cursorFollower.classList.remove("active");
    });
  });

  // Click effect
  document.addEventListener("mousedown", function () {
    cursor.classList.add("click");
    cursorFollower.classList.add("click");
  });

  document.addEventListener("mouseup", function () {
    cursor.classList.remove("click");
    cursorFollower.classList.remove("click");
  });
});
