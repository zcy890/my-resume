document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle");

  // Load the user's preference from local storage
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save the user's preference to local storage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      toggleButton.innerHTML = '<i class="bi bi-sun"></i> Toggle Light Mode';
    } else {
      localStorage.setItem("dark-mode", "disabled");
      toggleButton.innerHTML = '<i class="bi bi-moon"></i> Toggle Dark Mode';
    }
  });
});
