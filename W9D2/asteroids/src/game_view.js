const Game = require("./game.js");
const key = require('./keymaster.js');

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function() {
    this.bindKeyHandlers();
    let that = this;

    setInterval(function() {
        that.game.step();
        that.game.draw(that.ctx);
    }, 20);
}

GameView.prototype.bindKeyHandlers = function() {
    let that = this;
    key("w", function(){
        that.game.ship.power([0,-1]);
    });
    key("a", function(){
        that.game.ship.power([-1,0]);
    });
    key("s", function(){
        that.game.ship.power([0,1]);
    });
    key("d", function(){
        that.game.ship.power([1,0]);
    });
    key("d", "s", function(){
        that.game.ship.power([1,1]);
    });



    key("up", function(){
        that.game.ship.power([0,-1]);
    });
    key("left", function(){
        that.game.ship.power([-1,0]);
    });
    key("down", function(){
        that.game.ship.power([0,1]);
    });
    key("right", function(){
        that.game.ship.power([1,0]);
    });

    key("space", function(){
        that.game.fireBullet();
    });
}

module.exports = GameView;