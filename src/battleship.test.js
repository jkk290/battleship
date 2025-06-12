import { Ship } from './ship.js';
import { Gameboard } from './gameboard.js';

let testShip = new Ship(5);
let board = new Gameboard;

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


