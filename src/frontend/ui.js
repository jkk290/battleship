import { playerRound } from '../game.js'

export function createCell(boardContainer, boardType) {
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

export function updateCell(boardContainer, x, y, status) {
  const cell = document.querySelector(`${boardContainer} [data-x="${x}"][data-y="${y}"]`);
  cell.classList.add(status);
}

export function updateSunkShip(boardContainer, sunkShip) {
  let coordinates = sunkShip.getCoordinates();
  console.log(`Ship sunk with coordinates: ${coordinates}`);

  coordinates.forEach(coordinate => {
    console.log(`Setting coordinates as sunk: (${coordinate.x}, ${coordinate.y})`);
    updateCell(boardContainer, coordinate.x, coordinate.y, 'sunk');
  });

}

export function updatePlacedShip(boardContainer, placedShip) {
  let coordinates = placedShip.getCoordinates();

  coordinates.forEach(coordinate => {
    updateCell(boardContainer, coordinate.x, coordinate.y, 'has-ship');
  });
}

export function gameOver(player) {
  const message = document.querySelector('#game-message');
  const cells = document.querySelectorAll('#player-record-board-container .cell');
  cells.forEach(cell => {
    cell.classList.add('gameover');
  })
  message.textContent = `${player} wins the game!`

}