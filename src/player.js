import { Gameboard } from "./gameboard.js"

export class Player {
    constructor(){
        this.primaryBoard = new Gameboard;
        this.recordBoard = new Gameboard;
    }
}