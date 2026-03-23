const clickSound = new Audio("Sounds/Click_WindowsMediaCenter.wav"); // path to your sound
clickSound.volume = 0.5; // adjust if too loud or quiet

// Play sound for every click on the page
document.addEventListener("click", (event) => {
  // Ignore clicks on audio or video elements
  if (event.target.closest("audio") || event.target.closest("video")) return;

  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
});

// Add a small delay for links so the sound plays before the page changes
document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (link && link.href && !link.target) {
    event.preventDefault();
    const href = link.href;

    clickSound.currentTime = 0;
    clickSound.play();

    setTimeout(() => {
      window.location.href = href;
    }, 200); // adjust timing if needed
  }
});