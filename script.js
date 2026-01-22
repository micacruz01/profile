// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact button interaction
document.getElementById("contactButton").addEventListener("click", () => {
  alert("Thank you for reaching out!\nYou can email me at cruzelamica71@gmail.com");
});
