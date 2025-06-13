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

test('Coordinate (2,2) was a hit!', () => {
    expect(testBoard.receiveAttack(2,2)).toBe(true);
});

test('Coordinate (8,9) was a miss!', () => {
    expect(testBoard.receiveAttack(8,9)).toBe(false);
});

