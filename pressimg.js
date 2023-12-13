<<<<<<< HEAD:script.js
const popImage = document.getElementById("popImage");

function handleScroll() {
  const scrollPosition = window.scrollY;
  const imagePosition = popImage.offsetTop;

  if (scrollPosition > imagePosition - window.innerHeight / 2) {
    popImage.style.opacity = 1;
    popImage.classList.add("pop-animation");
=======

// PRESS
const popImage3 = document.getElementById('popImage3')

function handleScroll() {
  const scrollPosition = window.scrollY
  const imagePosition = popImage3.offsetTop

  if (scrollPosition > imagePosition - window.innerHeight / 2) {
    popImage3.style.opacity = 1
    popImage3.classList.add('pop-animation')
>>>>>>> 269aabc09574c250b651fc9752d978a463b04cbe:pressimg.js
  }
}

window.addEventListener("scroll", handleScroll);

<<<<<<< HEAD:script.js
const popImage2 = document.getElementById("popImage2");

function handleScroll2() {
  const scrollPosition = window.scrollY;
  const imagePosition = popImage2.offsetTop;

  // Tidsforsinkelse på 500 ms (0.5 sekunder)
  const delay = 1000;
=======
const popImage4 = document.getElementById('popImage4')

function handleScroll2() {
  const scrollPosition = window.scrollY
  const imagePosition = popImage4.offsetTop

  // Tidsforsinkelse på 500 ms (0.5 sekunder)
  const delay = 10
>>>>>>> 269aabc09574c250b651fc9752d978a463b04cbe:pressimg.js

  if (scrollPosition > imagePosition - window.innerHeight / 2) {
    // Brug setTimeout til at forsinke visningen af det andet billede
    setTimeout(() => {
<<<<<<< HEAD:script.js
      popImage2.style.opacity = 1;
      popImage2.classList.add("pop-animation");
    }, delay);
  }
}

// pi java

document.addEventListener("DOMContentLoaded", function () {
  const billeder2Images = document.querySelectorAll(".billede2");

  function handleImageFadeIn(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.classList.add("pop-animation");
        observer.unobserve(entry.target);
      }
    });
  }

  const imageObserver = new IntersectionObserver(handleImageFadeIn, { threshold: 0.5 });

  billeder2Images.forEach((image) => {
    imageObserver.observe(image);
  });
});
=======
      popImage4.style.opacity = 1
      popImage4.classList.add('pop-animation')
    }, delay)
  }
}

window.addEventListener('scroll', handleScroll2)

>>>>>>> 269aabc09574c250b651fc9752d978a463b04cbe:pressimg.js
