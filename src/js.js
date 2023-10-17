document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('miVideo');
  var playPauseButton = document.getElementById('play-pause-button');

  playPauseButton.addEventListener('click', function () {
    if (video.paused || video.ended) {
      video.play();
      playPauseButton.textContent = '⏸';
    } else {
      video.pause();
      playPauseButton.textContent = '▶️';
    }
  });

  // Actualiza el estado del botón de reproducción/pausa
  video.addEventListener('play', function () {
    playPauseButton.textContent = '⏸';
  });

  video.addEventListener('pause', function () {
    playPauseButton.textContent = '▶️';
  });
});