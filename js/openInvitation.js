let btnOpen = document.querySelector(".opening");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const song = document.getElementById("song");
let isPlaying = false;
document.body.classList.add("opening-active");

function openInvitation() {
  btnOpen.addEventListener("click", () => {
    btnOpen.style.opacity = 0;
    setTimeout(() => {
      document.body.classList.remove("opening-active");
      btnOpen.classList.add("hidden");
    }, 610);
    playAudio();
  });
}

function playAudio() {
  song.volume = 0.5;
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}

audioIconWrapper.addEventListener("click", () => {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
});
