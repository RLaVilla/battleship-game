import { populateHome } from "./dom";
export function gameOver(message) {
  const content = document.getElementById("content");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";

  let modal = document.getElementById("modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.classList.add("modal");
    modal.id = "modal";

    const modalMessage = document.createElement("p");
    modalMessage.classList.add("modalMessage");
    modal.appendChild(modalMessage);

    const playButton = document.createElement("button");
    playButton.textContent = "Play again";
    playButton.addEventListener("click", () => {
      modal.removeChild(modalMessage);
      modal.removeChild(playButton);
      content.removeChild(modal);
      overlay.style.display = "none";
      populateHome();
    });
    modal.appendChild(playButton);
    content.appendChild(modal);
  }
  const modalMessage = modal.querySelector(".modalMessage");
  modalMessage.textContent = message;
}
