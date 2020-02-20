import React from "react";
import * as Minesweeper from "../minesweeper.js";
import Board from "./board.jsx";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      board: new Minesweeper.Board(15, 33)
    };
    this.updateGame = this.updateGame.bind(this);
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} update={this.updateGame}/>
      </div>
    );
  }

  updateGame (tile, flagging) {
      if (flagging){
        tile.flagged = !tile.flagged;
      } else {
        tile.explore();
      }

      this.setState({ board: this.state.board });

      const gameStatus = document.getElementById('game-status');
      const modal = document.getElementById('modal');

      if (this.state.board.won()) {
        $(gameStatus).append("You Won");
        $(modal).addClass('is-open');
      } else if (this.state.board.lost()) {
        $(gameStatus).append("You Lose");
        $(modal).addClass('is-open');
      }
    }
}