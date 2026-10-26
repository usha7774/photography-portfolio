const filterButtons = document.querySelectorAll(".filters button");
const photos = document.querySelectorAll(".photo");

// Gallery category filters
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.filter;

    photos.forEach((photo) => {
      const category = photo.dataset.category;

      if (selectedCategory === "all" || category === selectedCategory) {
        photo.classList.remove("hidden");
      } else {
        photo.classList.add("hidden");
      }
    });
  });
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const type = document.getElementById("type").value;
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(
    `Photography Enquiry - ${type}`
  );

  const body = encodeURIComponent(
    `Hello,\n\nMy name is ${name}.\nMy email is ${email}.\nPhotoshoot type: ${type}\n\nMessage: ${message}`
  );

  document.getElementById("formMessage").textContent =
    "Opening your email app...";

  window.location.href =
    `mailto:hello@example.com?subject=${subject}&body=${body}`;
});