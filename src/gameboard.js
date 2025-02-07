import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(coords, direction, length) {
    const newShip = new Ship(length);
    let shipCoordinates = [];
    let x = coords[0];
    let y = coords[1];

    if (direction === "horizontal" && x + (length - 1) <= 9) {
      for (let i = 0; i < length; i++) {
        shipCoordinates.push([x + i, y]);
      }
    } else if (direction === "vertical" && y + (length - 1) <= 9) {
      for (let i = 0; i < length; i++) {
        shipCoordinates.push([x, y + i]);
      }
    } else {
      return false;
    }

    for (let ship of this.ships) {
      for (let coord of ship.coordinates) {
        if (
          shipCoordinates.some((c) => c[0] === coord[0] && c[1] === coord[1])
        ) {
          return false;
        }
      }
    }

    newShip.coordinates = shipCoordinates;
    this.ships.push(newShip);
    return true;
  }

  placeRandomShips() {
    const shipLengths = [5, 4, 3, 3, 2];

    shipLengths.forEach((length) => {
      let placed = false;

      while (!placed) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        const direction = Math.random() > 0.5 ? "horizontal" : "vertical";

        placed = this.placeShip([x, y], direction, length);
      }
    });
  }

  receiveAttack(coordinates) {
    let hit = false;

    for (let ship of this.ships) {
      for (let coord of ship.coordinates) {
        if (coord[0] === coordinates[0] && coord[1] === coordinates[1]) {
          ship.hit();
          console.log(ship)
          ship.hitCoordinates.push(coordinates);
          hit = true;
          break;
        }
      }
      if (hit) break;
    }

    if (hit) {
      if (this.isGameOver()) {
        return "game over";
      }
      return "hit";
    }

    this.missedAttacks.push(coordinates);
    return "miss";
  }

  isGameOver() {
    return this.ships.every((ship) => ship.sunk);
  }
}
