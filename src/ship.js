export class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.hitCoordinates = [];
    this.sunk = false;
    this.coordinates = [];
  }

  hit() {
    this.hitCount++;
    this.isSunk();
  }

  isSunk() {
    if (this.hitCount === this.length) {
      this.sunk = true;
    }
  }
}
