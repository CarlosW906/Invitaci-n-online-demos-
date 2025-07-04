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



  //botón de redes sociales
  const url = window.location.href; // URL actual de la invitación
  const message = encodeURIComponent("¡Te invito a mi fiesta! 🎉 Mira la invitación aquí: " + url);

  function shareWhatsApp() {
    window.open("https://api.whatsapp.com/send?text=" + message, "_blank");
  }

  function shareFacebook() {
    const fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    window.open(fbUrl, "_blank");
  }

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      alert("Enlace copiado: " + url);
    }).catch(err => {
      alert("Error al copiar el enlace");
    });
  }


  //script de cuenta regresiva
   const countdownElement = document.getElementById('countdown');

  //Fecha objetivo de la celebración (Año, Mes - 1, Día, Hora, Minuto, Segundo)
  const targetDate = new Date(2025, 7, 14, 11, 0, 0).getTime();  // 9 de agosto 2025 a las 17:00

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownElement.innerHTML = "¡Es hoy! 🎉";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} días ${hours}h ${minutes}m ${seconds}s`;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Llamada inmediata