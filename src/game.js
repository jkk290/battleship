import { Player } from "./player.js"

export function playGame() {
  let player1 = new Player();
  let player2 = new Player();

  let activePlayer = undefined;

  function selectFirstPlayer() {
      let num = Math.random() * 100;

      if (num < 50) {
        activePlayer = player1;

      } else {
        activePlayer = player2;
      }

      return activePlayer;
  };

  function playRound() {

  }
};