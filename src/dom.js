import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { displayShips } from "./displayShips";
import { gameOver } from "./modal";

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

  const pc = new Player("computer", "Computer");
  const human = new Player("real", "Human");

  function handleCellClick(event) {
    const cell = event.target;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    cell.removeEventListener("click", handleCellClick);

    const attackResult = pc.gameboard.receiveAttack([row, col]);

    if (attackResult === "hit" || attackResult === "game over") {
      cell.classList.add("hit");
    } else if (attackResult === "miss") {
      cell.classList.add("miss");
      const bullet = document.createElement("div");
      bullet.classList.add("bullet");
      cell.appendChild(bullet);
    }

    if (attackResult === "game over") {
      setTimeout(() => {
        gameOver("You won! Game over.");
      }, 500);
    } else {
      const opponentBoard = document.getElementById("opponentBoard");
      opponentBoard.classList.add("disabled");
      const playerBoard = document.getElementById("playerBoard");
      playerBoard.classList.remove("disabled");

      setTimeout(pcMove, 1000);
    }
  }
  const pcAttacks = new Set();

  function pcMove() {
    let col;
    let row;

    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (pcAttacks.has(`${row},${col}`));

    pcAttacks.add(`${row},${col}`);

    const cell = document.querySelector(
      `[data-row="${row}"][data-col="${col}"]`
    );
    const attackResult = human.gameboard.receiveAttack([row, col]);

    if (cell) {
      if (attackResult === "hit" || attackResult === "game over") {
        cell.classList.add("hit");
      } else if (attackResult === "miss") {
        cell.classList.add("miss");
        const bullet = document.createElement("div");
        bullet.classList.add("bullet");
        cell.appendChild(bullet);
      }
    }
    if (attackResult === "game over") {
      setTimeout(() => {
        gameOver("You Lost! Game Over.");
      }, 500);
    } else {
      setTimeout(() => {
        const opponentBoard = document.getElementById("opponentBoard");
        opponentBoard.classList.remove("disabled");
        const playerBoard = document.getElementById("playerBoard");
        playerBoard.classList.add("disabled");
      }, 1000);
    }
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
  }

  initializeGame();
}
