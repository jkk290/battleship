import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';

let testShip = new Ship(5);
let testBoard = new Gameboard;

test('Ship hit! Current hit: 1', () => {
    expect(testShip.hit()).toBe(1);
});

test('Ship is not sunken yet', () => {
    expect(testShip.isSunk()).toBe(false)
});

test('Ship has been sunked!', () => {
    testShip.totalHits = 5;
    expect(testShip.isSunk()).toBe(true);
})

test('Ship with length 5 has been place at (1,2)', () => {
    expect(testBoard.placeShip(1,2,5, 'horizontal')).toBe(true);
});

test('Coordinate (6,2) is not occupied', () => {
    expect(testBoard.board[6][2].hasShip).toBe(false);
});

