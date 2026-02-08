const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("mainCard"); // ✅ fixed
const photo = document.getElementById("photo");
const thanks = document.getElementById("thanks");
const upload = document.getElementById("upload");
const img = document.getElementById("img");

let speed = 0.08;


/* ---- Photo upload ---- */
upload.addEventListener("change", (e)=>{
  const file = e.target.files[0];
  if(file){
    img.src = URL.createObjectURL(file);
  }
});


/* ---- Music ---- */
const intro = document.getElementById("intro");
const mainCard = document.getElementById("mainCard");
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("music");

playBtn.addEventListener("click", () => {
  music.play();
  intro.classList.add("hidden");
  mainCard.classList.remove("hidden");
});


/* ---- NO runs away ---- *//* ---- NO runs away naturally ---- */
function moveNo(event) {
  const btnRect = noBtn.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  // cursor position
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // button center
  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  // distance from cursor to button center
  const dx = btnCenterX - mouseX;
  const dy = btnCenterY - mouseY;
  const distance = Math.sqrt(dx*dx + dy*dy);

  // if cursor closer than 30px, move button
  if(distance < 30){
    speed = Math.max(0.04, speed - 0.004); // gets slightly faster each attempt

    // calculate new position within card
    const maxX = cardRect.width - btnRect.width;
    const maxY = cardRect.height - btnRect.height;

    // move opposite direction of cursor with some randomness
    let newX = btnRect.left - cardRect.left + (dx > 0 ? 50 + Math.random()*50 : -50 - Math.random()*50);
    let newY = btnRect.top - cardRect.top + (dy > 0 ? 50 + Math.random()*50 : -50 - Math.random()*50);

    // clamp inside card
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    noBtn.style.transition = speed + "s linear";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
  }
}

// listen to mousemove over card
card.addEventListener("mousemove", moveNo);

// also allow click to trigger move
noBtn.addEventListener("click", (e) => moveNo(e));