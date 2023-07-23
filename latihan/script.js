const playButton = document.getElementById('playButton');
const playButton2 = document.getElementById('playButton2');
const audio = document.getElementById('audio');

playButton.addEventListener('click', function () {
  audio.play();
});
playButton2.addEventListener('click', function () {
  audio.pause();
});
