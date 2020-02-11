// function sum(...args) {
//   let total = 0; 
//   args.forEach(element => {
//     total += element;
//   });
//   return total; 
// }

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Function.prototype.myBind = function () {
  let args = Array.from(arguments);
  
  // return this.call(args[0]);
  return (...args2) => {
    args = args.concat(args2);
    // debugger 
    this.apply(args[0], args.slice(1));
    
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// // notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

Function.prototype.curry = function(amount) {
  let counter = 0; 
  let args = [];
  let that = this;

  const _curriedSum = function (num) {
    args.push(num);
    ++counter; 
    if (counter === amount) {
      return that(...args);
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30
// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30