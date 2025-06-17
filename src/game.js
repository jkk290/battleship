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

  function playerRound(targetX, targetY) {

    player2.primaryBoard.receiveAttack(targetX, targetY);
    player1.recordBoard[targetX][targetY].wasAttacked = true;

    activePlayer = player2

    return activePlayer;
  }

  function createCell(boardContainer, boardType) {
    const container = document.querySelector(boardContainer);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.dataset.x = i;
        cell.dataset.y = j;
        cell.classList.add('cell', `${boardType}-cell`);

        if (boardType === 'record') {
          cell.addEventListener('click', handlePlayerClick)
        }

        container.appendChild(cell);
      }
    }

  }

  function handlePlayerClick(event) {

    let targetX = parseInt(event.target.dataset.x);
    let targetY = parseInt(event.target.dataset.y);

    playerRound(targetX, targetY);

  }

}