const interval = setInterval(() => {
  neuron.fire();
}, 10);

// This time, if our Function#myThrottle worked correctly,
// the Neuron#fire function should only be able to execute
// every 500ms, even though we're still trying to invoke it
// every 10ms!

// If we want this behavior for ALL neurons, we can do the same logic in the constructor:

class Neuron {
  constructor() {
    this.fire = this.fire.myThrottle(500);
  }

  fire() {
    console.log("Firing!");
  }
}



Function.prototype.myThrottle = function (interval) {
  let tooSoon = false;
  return (...args) => {
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(() => tooSoon = false, interval);
      // setTimeout(() => {
      //   tooSoon = false;
      //   interval});
      // this.myThrottle(interval);
      this(...args);
    }
  };
};

let neuron = new Neuron();

neuron.fire();
