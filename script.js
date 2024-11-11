document.addEventListener("DOMContentLoaded", function () {
  // Slide in the header
  document.getElementById("header").classList.add("slide-in");

  // Elements to observe for slide-in and fade-in
  const elements = document.querySelectorAll(".slide-in-fade-in");

  // IntersectionObserver callback function
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
    threshold: 0.1, // Adjust threshold as needed
  });

  // Observe each element
  elements.forEach((element) => {
    observer.observe(element);
  });
});
