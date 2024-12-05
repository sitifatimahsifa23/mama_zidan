const playButton = document.getElementById("playMusic");
const birthdaySong = document.getElementById("birthdaySong");

playButton.addEventListener("click", () => {
  if (birthdaySong.paused) {
    birthdaySong.play();
    playButton.textContent = "Pause Lagu 🎵";
  } else {
    birthdaySong.pause();
    playButton.textContent = "Putar Lagu Ulang Tahun 🎵";
  }
});
