const MovingObject = require('./moving_object.js');
const Util = require('./util.js');
const Bullet = require('./bullet.js');

const CONSTANTS = {
    LENGTH: 5,
    COLOR: "green"
}

Util.inherits(Ship, MovingObject);

function Ship(pos, game) {
    let temp = {
        pos: pos,
        vel: [0,0],
        radius: CONSTANTS.LENGTH,
        color: CONSTANTS.COLOR,
        game: game
    }
    MovingObject.call(this, temp);
}

Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
}

Ship.prototype.fireBullet = function () {
    return new Bullet(this);
}

module.exports = Ship;