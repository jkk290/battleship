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

test('Ship with length 5 has been placed at (1,2)', () => {
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

test('1 ship has been sunk', () => {
    testBoard.receiveAttack(1,2);
    testBoard.receiveAttack(3,2);
    testBoard.receiveAttack(4,2);
    testBoard.receiveAttack(5,2);
    expect(testBoard.sunkCount).toBe(1);
})

