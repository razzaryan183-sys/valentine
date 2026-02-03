const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function yesClicked() {
  alert("Yay! ❤️😍");
}
