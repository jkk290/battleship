import { Player } from "./player.js"

export function playGame() {
  let player1 = new Player();
  let player2 = new Player();

  function placeComputerShips() {
    let x = undefined;
    let y = undefined;
    let direction = undefined;
    let shipLengths = [5, 4, 3, 3, 2];

    function pickCoord() {
        let num = Math.floor(Math.random() * 10);

        return num;
    };

    function pickDirection() {
      if (Math.random() < .5) {
        return 'horizontal';
      } else {
        return 'vertical';
      }

    };

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

  };

  function selectFirstPlayer() {

      if (Math.random() < .5) {
        return player1;
      } else {
        return player2;
      }
  };

  let activePlayer = selectFirstPlayer();

  function playRound() { 

    
  };

};