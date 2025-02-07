import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { displayShips } from "./displayShips";

export function populateHome() {
  function createGrid(playerBoardId, isOpponent = false) {
    const board = document.getElementById(playerBoardId);

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;

        if (isOpponent) {
          cell.addEventListener("click", handleCellClick);
        }

        board.appendChild(cell);
      }
    }
  }

  const newGameButton = document.getElementById("restart");
  newGameButton.addEventListener("click", initializeGame);

  const pc = new Player("computer", "Computer");
  const human = new Player("real", "Human");

  function handleCellClick(event) {
    const cell = event.target;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    const attackResult = pc.gameboard.receiveAttack([row, col]);

    if (attackResult === "hit") {
      cell.classList.add("hit");
    } else if (attackResult === "miss") {
      cell.classList.add("miss");
    }

    cell.removeEventListener("click", handleCellClick);
  }

  function initializeGame() {
    document.getElementById("playerBoard").innerHTML = "";
    document.getElementById("opponentBoard").innerHTML = "";
    createGrid("playerBoard", false);
    createGrid("opponentBoard", true);

    pc.gameboard = new Gameboard();
    human.gameboard = new Gameboard();

    pc.gameboard.placeRandomShips();
    human.gameboard.placeRandomShips();

    displayShips(human.gameboard, "playerBoard");

    newGameButton.style.display = "none";
  }

  initializeGame();
}
