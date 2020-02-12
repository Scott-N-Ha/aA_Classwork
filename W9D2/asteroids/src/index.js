// const MovingObject = require("./moving_object.js");
// const Asteroid = require("./asteroid.js");
// const Game = require("./game.js");
const GameView = require("./game_view.js");

// window.MovingObject = MovingObject;
// window.Asteroid = Asteroid;
window.GameView = GameView;

const canvas = document.getElementById("game-canvas");

const ctx = canvas.getContext("2d");
let gV = new GameView(ctx);


gV.start();

// canvas.addEventListener("w", gV.power("w").bind(gV))
// const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });
    
    // mo.draw(ctx);



// let a1 = new Asteroid([100,100]);
// a1.draw(ctx);

