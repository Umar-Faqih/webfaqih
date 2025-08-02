const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const playButton2 = document.getElementById('playButton2');

// Toggle music
function toggleMusic() {
  if (audio.paused) {
    audio.play();
    playButton.style.backgroundImage = "url('img/pause.png')";
    playButton2.style.backgroundImage = "url('img/pause.png')";
  } else {
    audio.pause();
    playButton.style.backgroundImage = "url('img/play.png')";
    playButton2.style.backgroundImage = "url('img/play.png')";
  }
}

// Event listeners
playButton.addEventListener('click', toggleMusic);
playButton2.addEventListener('click', toggleMusic);
