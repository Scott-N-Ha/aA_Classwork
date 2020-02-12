// const Bullet = require('./bullet.js');

function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    // ctx.fillStyle = this.color;
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = this.color;
    ctx.stroke();
    // ctx.drawImage(document.getElementById('death-star'), 10, 10);
}

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    // if(!(this instanceof Bullet)) this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    let a = this.pos[0] - otherObject.pos[0];
    let b = this.pos[1] - otherObject.pos[1];

    let c = Math.sqrt(a*a + b*b);

    return c <= (this.radius + otherObject.radius);
}

MovingObject.prototype.collidedWith = function(otherObject) {
    this.game.remove(otherObject);
    this.game.remove(this);
}

module.exports = MovingObject;