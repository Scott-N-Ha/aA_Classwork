// import Game from "../hanoi/game.js"

class View {

  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.clicked = null;
    this.setupTowers();
    this.render();
    this.clickTower();
  }


  setupTowers() {
    this.el.append($("<ul class='tower-1' id='0'></ul>"))
    this.el.append($("<ul class='tower-2' id='1'></ul>"))
    this.el.append($("<ul class='tower-3' id='2'></ul>"))
  }

  render() {
    $("ul").empty()
    for (let i = 0; i < 3; i++){
      this.game.towers[i].forEach(disc => {
        let $disc = $(`<li class="disc-${disc}" id="${i}"></li>`);
        $disc.css({"width": `${50 * disc}`})
        $(`.tower-${i+1}`).append($disc);
      })
    }
  }

  clickTower() {
    this.el.on('click', () => {
      if (this.clicked === null) {
        this.clicked = $(event.target).attr("id");
      } else {
        let newClick = $(event.target).attr("id");
        this.game.move(this.clicked, newClick);
        this.render();
        this.clicked = null;
      }
    })
  }
}

module.exports = View;