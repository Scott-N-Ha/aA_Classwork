const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

const CONSTANTS = {
    COLOR: "white",
    RADIUS: 2,
    LENGTH: 20,
    GROWTH: 10
}

Util.inherits(Asteroid, MovingObject);

function Asteroid (position, game){
    let temp = {
        pos: position,
        vel: Util.randomVec(CONSTANTS.LENGTH),
        radius: CONSTANTS.RADIUS + (Math.random()*CONSTANTS.GROWTH),
        color: CONSTANTS.COLOR,
        game: game
    }

    MovingObject.call(this, temp);
}



module.exports = Asteroid;