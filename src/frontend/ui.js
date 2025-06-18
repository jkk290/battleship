import { playerRound } from '../game'

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
  const cell = document.querySelector(`${boardContainer}[data-x="${x}"][data-y="${y}"]`)
  cell.classList.add(status);

}

export function renderDisplay() {

}