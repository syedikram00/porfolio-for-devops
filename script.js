// ============================
// Portfolio Loaded
// ============================
console.log("Portfolio Loaded Successfully!");

// ============================
// Smooth Scrolling for Nav Links
// ============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================
// Button Click Example
// ============================
const ctaButton = document.querySelector('.btn');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    console.log("Button clicked!");
  });
}

// ============================
// Current Year in Footer
// ============================
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}