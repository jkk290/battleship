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

    placeShip(length) {
        
    }

    receiveAttack(x, y){

    }
}