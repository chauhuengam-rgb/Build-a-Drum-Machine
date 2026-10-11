const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

drumPads.forEach((pad) => {
  const audio = pad.querySelector(".clip");
  
  pad.addEventListener("click", () => {
    playSound(audio, pad);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const audio = document.getElementById(key);
  
  if (audio) {
    const pad = audio.parentElement;
    playSound(audio, pad);
  }
});

function playSound(audio, pad) {
  audio.currentTime = 0;
  audio.play();
  const description = pad.id.replace(/-/g, " ").toUpperCase();
  display.innerText = description;
}