const animatedImages = document.querySelectorAll('.animated-image')

window.addEventListener('scroll', () => {
  animatedImages.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (imageTop < windowHeight) {
      image.style.opacity = 1
      image.style.transform = 'translateY(0)'
    } else {
      image.style.opacity = 0
      image.style.transform = 'translateY(50px)' // Just an example, adjust as needed
    }
  })
})
