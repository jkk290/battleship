import { Player } from "./player.js"
import { createCell, updateCell, updateSunkShip, gameOver, updatePlacedShip } from "./frontend/ui.js";

let player1;
let player2;
let activePlayer;
let playerPrimaryContainer = '#player-primary-board-container';
let playerRecordContainer = '#player-record-board-container';

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

      let placedShip = player.primaryBoard.placeShip(x, y, length, direction);
      if (placedShip.placed) {
        placed = true;
        if (player === player1) {
          console.log(`placing ship at cell (${x}, ${y})`)
          updatePlacedShip(playerPrimaryContainer, placedShip.ship);
        }

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

export function initializeGame(){
  player1 = new Player();
  player2 = new Player();

  createCell(playerPrimaryContainer, 'primary');
  createCell(playerRecordContainer, 'record');

  placeShips(player1);
  placeShips(player2);

  activePlayer = selectFirstPlayer();

  if (activePlayer === player2) {
    computerRound();
  }

}

export function computerRound() {
  let compTargetX = undefined;
  let compTargetY = undefined;
  let shotSuccessful = false;

  while (!shotSuccessful) {
    compTargetX = pickCoord();
    compTargetY = pickCoord();

    let compTarget = player2.recordBoard.board[compTargetX][compTargetY];

    if (!compTarget.wasAttacked) {
      let compTargetStatus = player1.primaryBoard.receiveAttack(compTargetX, compTargetY);
      compTarget.wasAttacked = true;
      shotSuccessful = true;

      if (compTargetStatus.status === 'sunk') {
        updateSunkShip(playerPrimaryContainer, compTargetStatus.ship);
      } else {
        updateCell(playerPrimaryContainer, compTargetX, compTargetY, compTargetStatus);
      }
    }
  }

  if (player1.primaryBoard.allShipsSunk() === true) {
    gameOver('Computer');
  }

}

export function playerRound(targetX, targetY) {

  let playerTargetStatus = player2.primaryBoard.receiveAttack(targetX, targetY);
  player1.recordBoard.board[targetX][targetY].wasAttacked = true;

  if (playerTargetStatus.status === 'sunk') {
    updateSunkShip(playerRecordContainer, playerTargetStatus.ship);
  } else {
    updateCell(playerRecordContainer, targetX, targetY, playerTargetStatus);
  }

  if (player2.primaryBoard.allShipsSunk() === true) {
    gameOver('Player');
  } else {
    computerRound();
  }
}