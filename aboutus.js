// Paste the JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
  // Trigger fade-in effect for images
  const images = document.querySelectorAll(".overlappende_billeder2 img");

  images.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = "1";
    }, index * 1000); // Adjust the delay as needed
  });
});
