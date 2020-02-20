class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.el.on('click', () => {
      let num = $(event.target).attr('class');
      let x = num % 3;
      let y = Math.floor(num/3);
      let currentPlayer = this.game.currentPlayer;
      this.game.playMove([x,y]);
      $(event.target).html(`${currentPlayer}`);
      $(event.target).attr('class','occupied');
      if (this.game.isOver()){
        if (this.game.winner()) alert(`Congrats player ${currentPlayer}`);
        else alert(`Game over`);
        
      }
    });
  }

  makeMove($square) {

  }

  setupBoard() {
    let $ul = $('<ul>');
    this.el.append($ul);

    for (let i = 0; i < 9; i++) {
      let $li = $(`<li class="${i}">`);
      $ul.append($li);
    }
  }
}

module.exports = View;
