import { Player } from "./player.js"

export function playGame() {
  let player1 = new Player();
  let player2 = new Player();

  function placeComputerShips() {
    let x = undefined;
    let y = undefined;

    function pickCoord() {
        let num = Math.floor(Math.random() * 11);

        return num;
    };

    function pickHorizontal() {
      let num = Math.random() * 100;

      if (num < 50) {
        return true;

      } else {

        return false;
      };

    };

    while (player2.primaryBoard.shipCount <= 5) {
      x = pickCoord();
      y = pickCoord();

  };

  function selectFirstPlayer() {

      let num = Math.random() * 100;

      if (num < 50) {
        return player1;

      } else {
        return player2;
      }

  };

  let activePlayer = selectFirstPlayer();

  function playRound() { 

    
  };

}

};