import { Player } from "./player.js"

let player1;
let player2;
let activePlayer;

function pickCoord() {
  return Math.floor(Math.random() * 10);
}

function pickDirection() {
  if (Math.random() < .5) {
    return 'horizontal';
  } else {
    return 'vertical';
  }
}

function placeShips(player) {
  let shipLengths = [5, 4, 3, 3, 2];

  shipLengths.forEach((length) => {
    let placed = false;

    while (!placed) {
      let x = pickCoord();
      let y = pickCoord();
      let direction = pickDirection();

      if (player.primaryBoard.placeShip(x, y, length, direction)) {
        placed = true;
      }
    }
  });
}

function selectFirstPlayer() {
  if (Math.random() < .5) {
    return player1;
  } else {
    return player2;
  }
}

function switchPlayer() {
  activePlayer = activePlayer === player1 ? player2 : player1;
  return activePlayer
}

export function initializeGame(){
  player1 = new Player();
  player2 = new Player();

  placeShips(player1);
  placeShips(player2);

  activePlayer = selectFirstPlayer();
}

export function playGame() {
  initializeGame();

}

export function computerRound() {
  let compTargetX = undefined;
  let compTargetY = undefined;
  let shotSuccessful = false;

  while (!shotSuccessful) {
    compTargetX = pickCoord();
    compTargetY = pickCoord();

    let compTarget = player2.recordBoard[compTargetX][compTargetY];

    if (!compTarget.wasAttacked) {
      player1.primaryBoard.receiveAttack(compTargetX, compTargetY);
      compTarget.wasAttacked = true;
      shotSuccessful = true;
    }
  }

  switchPlayer();
}

export function playerRound(targetX, targetY) {

  player2.primaryBoard.receiveAttack(targetX, targetY);
  player1.recordBoard[targetX][targetY].wasAttacked = true;

  switchPlayer();
}