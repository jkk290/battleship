export class Gameboard {
    constructor() {
        this.rows = 10;
        this.columns = 10;
        this.board = [];

        for (let i = 0; i < this.rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.columns; j++) {
                this.board[i][j] = {
                    hasShip: false,
                    missedShot: undefined
                }
            }
        }
    }

    placeShip(x, y, length, direction) {
        if ((x + length) > 10 || y + length > 10) {
            return null;
        } else if (direction === 'horizontal') {
            let count = 0;

            while(count < length) {
                this.board[x + count][y].hasShip = true;
                count++
            }
            
        } else if (direction === 'vertical') {
            let count = 0;

            while(count < length) {
                this.board[x][y + count].hasShip = true;
                count++
            }
        } else {
            return null;
        }

        return this.board[x][y].hasShip;
    }

    receiveAttack(x, y){

    }
}