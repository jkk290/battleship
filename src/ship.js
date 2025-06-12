export class Ship {
    constructor(length) {
        this.length = length;
        this.totalHits = 0;
        this.sunk = false;
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



};