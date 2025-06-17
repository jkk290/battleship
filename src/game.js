import { Player } from "./player.js"

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

export function playGame() {
  let player1 = new Player();
  let player2 = new Player();

  function placePlayerShips() {
    let x = undefined;
    let y = undefined;
    let direction = undefined;
    let shipLengths = [5, 4, 3, 3, 2];

    shipLengths.forEach((length) => {
      let placed = false;

      while (!placed) {
        x = pickCoord();
        y = pickCoord();
        direction = pickDirection();

        if (player1.primaryBoard.placeShip(x, y, length, direction)) {
          placed = true;
        }

      }

    });

  }

  function placeComputerShips() {
    let x = undefined;
    let y = undefined;
    let direction = undefined;
    let shipLengths = [5, 4, 3, 3, 2];

    shipLengths.forEach((length) => {
      let placed = false;

      while (!placed) {
        x = pickCoord();
        y = pickCoord();
        direction = pickDirection();

        if (player2.primaryBoard.placeShip(x, y, length, direction)) {
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

  let activePlayer = selectFirstPlayer();

  function computerRound() {
    let compTargetX = undefined;
    let compTargetY = undefined;
    let shotSuccessful = false;

    while (!shotSuccessful) {
      compTargetX = pickCoord();
      compTargetY = pickCoord();

      let compTarget = player2.recordBoard[compTargetX][compTargetY];

      if (!compTarget.wasAttacked) {
        player1.primaryBoard.receiveAttack(compTargetX, compTargetY);
        player2.recordBoard[compTargetX][compTargetY].wasAttacked = true;
        shotSuccessful = true;
      }

    }

    activePlayer = player1
    return activePlayer;

  }

}