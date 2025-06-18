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
                    wasAttacked: false,
                    ship: undefined
                }
            }
        }
    }

    placeShip(x, y, length, direction) {   

        if (direction === 'horizontal') {
            if ((x + length) > 10) {
                return false;

            }

        } else if (direction === 'vertical') {
            if ((y + length) > 10) {
                return false;

            }
        };

        if (direction === 'horizontal') {
            let count = 0;
            
            while(count < length) {
                if (!this.board[x + count][y].hasShip) {
                    count++;

                } else {
                    return false;

                }
            }

        } else if (direction === 'vertical') {
            let count = 0;
            
            while(count < length) {
                if (!this.board[x][y + count].hasShip) {
                    count++;

                } else {
                    return false;

                }
            }
        }

        let newShip = new Ship(length, x, y, direction);
        this.shipCount += 1;

        if (direction === 'horizontal') {
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
            return false;
            
        }
        
        return this.board[x][y].hasShip;
    }

    receiveAttack(x, y){
        if (this.board[x][y].hasShip === true) {
            this.board[x][y].ship.hit();
            this.board[x][y].wasAttacked = true;
            
            if (this.board[x][y].ship.isSunk()) {
                this.sunkCount += 1;

                return 'sunk';
            }

            return 'hit';

        } else if (this.board[x][y].hasShip === false) {
            this.board[x][y].wasAttacked = true;
            return 'miss';

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