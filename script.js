document.addEventListener("DOMContentLoaded", function () {
  // Slide in the header
  document.getElementById("header").classList.add("slide-in");

  // Elements to observe for slide-in and fade-in
  const slideInFadeInElements = document.querySelectorAll(".slide-in-fade-in");
  const fadeInElements = document.querySelectorAll(".fade-in");

  // IntersectionObserver callback function for slide-in and fade-in elements
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // Optional: stop observing once the element is in view
      }
    });
  };

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: window.innerWidth <= 768 ? 0.5 : 0.1, // Larger threshold for small screens
  });

  // Observe each slide-in and fade-in element
  slideInFadeInElements.forEach((element) => {
    observer.observe(element);
  });

  // Observe each fade-in element
  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
});

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    const navbarCollapse = document.querySelector(".navbar .navbar-collapse");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    // Toggle the navbar-collapse visibility
    if (navbarCollapse.style.right === "0px") {
      navbarCollapse.style.right = "-100vw";
    } else {
      navbarCollapse.style.right = "0";
    }

    // Toggle the hamburger menu state (rotate and background change)
    if (hamburgerMenu.classList.contains("open")) {
      hamburgerMenu.classList.remove("open");
      // Reset to original state (before clicked)
      hamburgerMenu.style.backgroundColor = "#fff"; // Set the original background color
    } else {
      hamburgerMenu.classList.add("open");
      // Set background color to transparent
      hamburgerMenu.style.backgroundColor = "transparent";
    }
  });
