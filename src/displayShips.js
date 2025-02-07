export function displayShips(gameboard, boardId) {
  gameboard.ships.forEach((ship, index) => {
    ship.coordinates.forEach((coord) => {
      const row = coord[0];
      const col = coord[1];

      const cell = document.querySelector(
        `#${boardId} .cell[data-row='${row}'][data-col='${col}']`
      );

      console.log(cell);

      if (cell) {
        cell.classList.add(`ship${index}`);
        console.log(index);
      }
    });
  });
}
