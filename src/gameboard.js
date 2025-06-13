import { Ship } from "./ship";

export class Gameboard {
    constructor() {
        this.rows = 10;
        this.columns = 10;
        this.board = [];
        this.shipCount = 0;
        this.sunkCount = 0;

        for (let i = 0; i < this.rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.columns; j++) {
                this.board[i][j] = {
                    hasShip: false,
                    missedShot: undefined,
                    ship: undefined
                }
            }
        }
    }

    placeShip(x, y, length, direction) {
        let newShip = new Ship(length);
        this.shipCount += 1;

        if ((x + length) > 10 || y + length > 10) {
            return null;

        } else if (direction === 'horizontal') {
            let count = 0;

            while(count < length) {
                this.board[x + count][y].hasShip = true;
                this.board[x + count][y].ship = newShip;
                count++
            }
            
        } else if (direction === 'vertical') {
            let count = 0;

            while(count < length) {
                this.board[x][y + count].hasShip = true;
                this.board[x][y + count].ship = newShip;
                count++
            }
        } else {
            return null;
        }

        return this.board[x][y].hasShip;
    }

    receiveAttack(x, y){
        if (this.board[x][y].hasShip === true) {
            this.board[x][y].ship.hit();
            
            if (this.board[x][y].ship.isSunk()) {
                this.sunkCount += 1;
            }

            return true;

        } else if (this.board[x][y].hasShip === false) {
            this.board[x][y].missedShot = true;
            return false;

        } else {
            return null;

        }
    }

    allShipsSunk() {
        if (this.sunkCount === this.shipCount) {
            return true;

        } else {
            return false;

        }
    }

}