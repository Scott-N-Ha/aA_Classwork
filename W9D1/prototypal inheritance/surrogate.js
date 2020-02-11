Function.prototype.inherits = function(SuperClass){
  debugger 
  function Surrogate(){}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this; 

}

function MovingObject() { }
MovingObject.prototype.shoot = function () {
  console.log('bang');
}
function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);
