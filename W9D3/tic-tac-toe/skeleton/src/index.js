
const View = require("./ttt-view.js")
const Game = require("../../tic-tac-node/game.js")
  $(() => {
    // Your code here
    let $figure = $('figure')
    let view = new View(new Game(), $figure);
  });
