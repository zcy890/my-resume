document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle");
  let darkModeEnabled = false;

  // Add fade-in animation to sections
  const sections = document.querySelectorAll(".fade-in");
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = "0.2s";
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeEnabled = !darkModeEnabled;

    // Update button text and icon
    if (darkModeEnabled) {
      toggleButton.innerHTML = '<i class="bi bi-sun"></i> Light Mode';
    } else {
      toggleButton.innerHTML = '<i class="bi bi-moon"></i> Dark Mode';
    }
  });

  // Add smooth scrolling to navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add hover effects to project cards
  const projectEntries = document.querySelectorAll(".project-entry");
  projectEntries.forEach((entry) => {
    entry.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px) scale(1.01)";
    });

    entry.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(-2px) scale(1)";
    });
  });
});
