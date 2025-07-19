// Smooth scroll for internal page section links (like #contact, #about)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// DOM Ready Actions
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navMenu.classList.toggle("show"); // Support both classes
  });

  // Close menu when a nav-link is clicked (for better mobile UX)
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      navMenu.classList.remove("show");
    });
  });

  // Form validation and submission
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      const inputs = this.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        if (input.value.trim() === '') {
          valid = false;
          input.style.border = '1px solid red';
        } else {
          input.style.border = '1px solid green';
        }
      });

      if (valid) {
        alert('Form submitted successfully!');
        this.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  });
});

// Scroll to section or page
function scrollToSection(sectionId) {
  if (sectionId.includes('.html')) {
    window.location.href = sectionId; // Navigate to another page
  } else {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
s