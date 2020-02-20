import Game from "../hanoi/game.js";
import View from "./view.js";

$(() => {
  const rootEl = $('.towers');
  const game = new Game();
  new View(game, rootEl);
});
