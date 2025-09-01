// Page Loader
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  const loaderProgress = document.querySelector(".loader-progress");
  const loaderLetters = document.querySelectorAll(".loader-letter");

  // Animate loader letters
  loaderLetters.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.transform = "translateY(0)";
      letter.style.opacity = "1";
    }, index * 100);
  });

  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      // Hide loader when complete
      setTimeout(() => {
        loader.classList.add("loaded");

        // Remove loader from DOM after animation completes
        setTimeout(() => {
          loader.remove();
        }, 1000);
      }, 500);
    }
    loaderProgress.style.width = `${progress}%`;
  }, 300);

  // Ensure loader completes even if content loads faster
  window.addEventListener("load", function () {
    if (progress < 100) {
      progress = 100;
      loaderProgress.style.width = "100%";

      setTimeout(() => {
        loader.classList.add("loaded");

        setTimeout(() => {
          loader.remove();
        }, 1000);
      }, 500);
    }
  });
});
