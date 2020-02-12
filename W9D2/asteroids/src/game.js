const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js')

const CONSTANTS = {
    DIM_X: 1080,
    DIM_Y: 720,
    NUM_ASS: 400,
    BACKGROUND_COLOR: "black"
}

function Game() {
    this.asses = [];
    for (let index = 0; index < CONSTANTS.NUM_ASS; index++) {
        this.addAsteroids();
    }
    this.ship = new Ship([(CONSTANTS.DIM_X / 2), (CONSTANTS.DIM_Y / 2)], this);
    // this.asses.push(ship);
    this.bullets = [];
}

Game.prototype.allObjects = function() {
    return this.asses.concat([this.ship]).concat(this.bullets);
}

Game.prototype.addAsteroids = function () {
    if (this.asses.length < CONSTANTS.NUM_ASS){
        this.asses.push(new Asteroid(this.randomPosition(), this));
    }
}

Game.prototype.randomPosition = function () {
    let x = Math.random() * (CONSTANTS.DIM_X);
    let y = Math.random() * (CONSTANTS.DIM_Y);
    return [x,y];
}

Game.prototype.draw = function (ctx) {
    ctx.fillStyle = CONSTANTS.BACKGROUND_COLOR;
    ctx.fillRect(0,0,CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    // for(let i = 0; i < this.asses.length; i++) {
    //     this.asses[i].draw(ctx);
    // }
    this.allObjects().forEach(ass => {
        ass.draw(ctx);
    });
}

Game.prototype.moveObjects = function() {
    let all = this.allObjects();
    all.forEach(ast => {
        ast.move();

        if (this instanceof Bullet){

        } else {
            ast.pos = this.wrap(ast.pos);
        }
    });
}

Game.prototype.wrap = function(pos) {
    let wrappedPos = [0, 0];

    if (pos[0] < 0) {
        wrappedPos[0] = CONSTANTS.DIM_X;
    } else if (pos[0] > CONSTANTS.DIM_X) {
        wrappedPos[0] = 0;
    } else {
        wrappedPos[0] = pos[0];
    }

    if (pos[1] < 0) {
        wrappedPos[1] = CONSTANTS.DIM_Y;
    } else if (pos[1] > CONSTANTS.DIM_Y) {
        wrappedPos[1] = 0;
    } else {
        wrappedPos[1] = pos[1];
    }

    return wrappedPos;
}

Game.prototype.checkCollisions = function() {
    let temp = this.allObjects();
    for (let i = 0; i < temp.length; i++) {
        let ast1 = temp[i];
        for (let j = 0; j < temp.length; j++) {
            let ast2 = temp[j];
            if (i !== j && ast1.isCollidedWith(ast2)) {
                // if (ast1 instanceof Ship || ast2 instanceof Ship) alert ("Game Over");
                ast1.collidedWith(ast2);
            }
        }
    }
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(ast) {
    if (ast) {
        for (let i = 0; i < this.asses.length; i++) {
            if (ast === this.asses[i]) {
                this.asses = this.asses.slice(0, i).concat(this.asses.slice(i+1));
                return true;
            }
        }
    }
}

Game.prototype.fireBullet = function() {
    this.bullets.push(this.ship.fireBullet());
}

module.exports = Game;