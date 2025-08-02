const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

// Toggle music
function toggleMusic() {
  if (audio.paused) {
    audio.play();
    playButton.style.backgroundImage = "url('img/false.png')";
  } else {
    audio.pause();
    playButton.style.backgroundImage = "url('img/true.png')";
  }
}

// Event listener
playButton.addEventListener('click', toggleMusic);

