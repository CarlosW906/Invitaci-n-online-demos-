function confirmarAsistencia(button) {
    button.classList.add('clicked');
    setTimeout(() => {
      window.open('https://forms.gle/xuTKxbr4vQZpNGPFA', '_blank');
      button.classList.remove('clicked');
    }, 200);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('bg-music');

    function playMusic() {
      music.play().then(() => {
        console.log("🎵 Música reproduciéndose.");
      }).catch(error => {
        console.log("⚠️ Reproducción automática bloqueada. Esperando interacción...");
        // Si falla, escuchamos el primer click del usuario
        document.addEventListener('click', firstUserInteraction);
      });
    }

    function firstUserInteraction() {
      music.play().then(() => {
        console.log("✅ Música iniciada tras interacción.");
      }).catch(error => {
        console.log("❌ Fallo al intentar reproducir tras interacción.");
      });
      // Solo intentamos una vez, luego removemos el listener
      document.removeEventListener('click', firstUserInteraction);
    }

    playMusic();
  });

  const overlay = document.getElementById('start-overlay');
  const music = document.getElementById('background-music');

  function startExperience() {
    overlay.classList.add('fade-out'); // activa animación de opacidad
    setTimeout(() => {
      overlay.style.display = 'none'; // oculta después de la transición
    }, 1000); // mismo tiempo que el `transition` en CSS
    music.play();
  }

  overlay.addEventListener('click', startExperience);
  overlay.addEventListener('touchstart', startExperience);