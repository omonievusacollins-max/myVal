const noButton = document.getElementById('no');
const buttons = document.querySelector('.buttons');
const yesBtn = document.getElementById("yes");

// Add event listeners for both mouse and touch
noButton.addEventListener('mouseenter', moveButton);
noButton.addEventListener('touchstart', moveButton);

function moveButton() {
  // Generate random position
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

  // Move button to random position using fixed positioning
  noButton.style.position = 'fixed';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
}

// display second screen on click of see surprise button
const seeSurpriseButton = document.getElementById('see-surprise');

// YES button
yesBtn.addEventListener("click", () => {
  alert("Yayyy ❤️ I love you so much!");
});

const firstScreen = document.querySelector(".first-screen");
const secondScreen = document.querySelector(".second-screen");
const openBtn = document.querySelector(".btn");

// create audio
const music = new Audio("Raindance.mp3");

openBtn.addEventListener("click", () => {
  // hide first screen
  firstScreen.style.display = "none";

  // show second screen
  secondScreen.style.display = "block";

  // play music
  music.play();
});
