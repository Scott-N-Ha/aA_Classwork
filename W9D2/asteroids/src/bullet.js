const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

Util.inherits(Bullet, MovingObject);

CONSTANTS = {
    SPEED: 4,
    SIZE: 1,
    COLOR: "red",
}

function Bullet (ship) {
    let x = 1;
    if (ship.vel[0] < 0){
        x = -1;
    }

    let y = 1;
    if (ship.vel[1] < 0) {
        y = -1;
    }

    let temp = {
        pos: ship.pos,
        // vel: [ship.vel[0] + (x * CONSTANTS.SPEED), ship.vel[1] + (y * CONSTANTS.SPEED)],
        vel: [ship.vel[0] + (x * CONSTANTS.SPEED), ship.vel[1]],
        radius: CONSTANTS.SIZE,
        color: CONSTANTS.COLOR,
        game: ship.game
    }

    MovingObject.call(this, temp);
}

module.exports = Bullet;