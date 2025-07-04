function confirmarAsistencia(button) {
  window.open('https://forms.gle/xuTKxbr4vQZpNGPFA', '_blank');
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 200);
}

document.addEventListener('DOMContentLoaded', function () {
  const music = document.getElementById('bg-music');
  const overlay = document.getElementById('start-overlay');

  function startExperience() {
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 1000);
    music.play().catch(err => {
      console.log("❌ Error al reproducir música:", err);
    });
  }

  overlay.addEventListener('click', startExperience);
  overlay.addEventListener('touchstart', startExperience);
});


//carousel de fotos
  let currentSlide = 0;
  const images = document.querySelectorAll('.carousel-image');

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

