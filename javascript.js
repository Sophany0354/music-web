document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".playBtn");

  buttons.forEach((btn) => {
    const audioId = btn.getAttribute("data-audio");
    const audio = document.getElementById(audioId);

    btn.addEventListener("click", () => {
      document.querySelectorAll("audio").forEach((a) => {
        if (a !== audio) {
          a.pause();
          a.currentTime = 0;
          const otherBtn = document.querySelector(`[data-audio="${a.id}"]`);
          if (otherBtn) otherBtn.textContent = "▶ Play";
        }
      });

      if (audio.paused) {
        audio.play();
        btn.textContent = "⏸ Pause";
      } else {
        audio.pause();
        btn.textContent = "▶ Play";
      }
    });
    audio.addEventListener("ended", () => {
      btn.textContent = "▶ Play";
    });
  });
});
