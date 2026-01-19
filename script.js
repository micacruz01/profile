// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: Add a click event for the contact button
document.getElementById('contactButton').addEventListener('click', () => {
  alert('Thank you for reaching out! Please email me at cruzelamica71@gmail.com.');
});