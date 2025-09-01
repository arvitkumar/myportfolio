document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Scroll animations
  const animateElements = document.querySelectorAll(
    ".animate-on-scroll, .skill-card, .project-card"
  );

  function checkScroll() {
    animateElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("visible");
      }
    });
  }

  // Initial check
  checkScroll();

  // Check on scroll
  window.addEventListener("scroll", checkScroll);

  // Hero title animation
  const titleWords = document.querySelectorAll(".title-word");
  titleWords.forEach((word, index) => {
    setTimeout(() => {
      word.style.transform = "translateY(0)";
      word.style.opacity = "1";
    }, index * 200);
  });

  // Testimonial slider
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonialCards.forEach((card) => card.classList.remove("active"));
    testimonialCards[index].classList.add("active");
  }

  prevBtn.addEventListener("click", function () {
    currentIndex =
      (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentIndex);
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonial(currentIndex);
  });

  // Auto-rotate testimonials
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonial(currentIndex);
  }, 5000);

  // Water droplet effect
  function createWaterDrops() {
    const waterDropsContainer = document.querySelector(".water-drops");
    const containerWidth = waterDropsContainer.offsetWidth;
    const containerHeight = waterDropsContainer.offsetHeight;

    for (let i = 0; i < 20; i++) {
      const drop = document.createElement("div");
      drop.classList.add("water-drop");

      // Random position
      const left = Math.random() * containerWidth;
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 3;
      const size = 2 + Math.random() * 3;

      drop.style.left = `${left}px`;
      drop.style.animationDelay = `${delay}s`;
      drop.style.animationDuration = `${duration}s`;
      drop.style.width = `${size}px`;
      drop.style.height = `${size}px`;

      waterDropsContainer.appendChild(drop);
    }
  }

  createWaterDrops();

  // Skill progress animation
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const progressBar = this.querySelector(".progress-bar");
      const width = progressBar.style.width;
      progressBar.style.width = "0";

      setTimeout(() => {
        progressBar.style.width = width;
      }, 10);
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
// Form Validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Simple validation
    if (name === '' || email === '' || subject === '' || message === '') {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.classList.add('error');
        formMessage.style.display = 'block';
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.add('error');
        formMessage.style.display = 'block';
        return false;
    }
    
    return true;
}

// Add this validation check at the beginning of your form submit handler
if (!validateForm()) return;