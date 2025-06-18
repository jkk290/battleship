export class Ship {
    constructor(length) {
        this.length = length;
        this.totalHits = 0;
        this.sunk = false;
        this.startX = undefined;
        this.startY = undefined;
        this.direction = undefined;

    }

    hit() {
        return this.totalHits += 1;
    }

    isSunk() {
        if (this.length === this.totalHits) {
            this.sunk = true;
            return this.sunk;

        } else {
            return this.sunk;
        }
    }

    getCoordinates() {
      let shipCoordinates = [];

      for(let i = 0; i < this.length; i++) {
        if (this.direction === 'horizontal') {
          shipCoordinates.push({x: this.startX + i, y: this.startY})
        } else if (this.direction === 'vertical') {
          shipCoordinates.push({x: this.startX, y: this.startY + i})
        }
      }

      return shipCoordinates;
    }



};