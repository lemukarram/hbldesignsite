// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Example: Alert when Buy Now clicked
document.querySelectorAll('.btn-success').forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Redirecting to payment...");
  });
});
