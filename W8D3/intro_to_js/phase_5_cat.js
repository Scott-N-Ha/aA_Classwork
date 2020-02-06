class Cat {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }

  cuteStatement(){
    return `${this.owner} loves ${this.name}`;
  }

  meow(){
    return 'meow';
  }
}

fionna = new Cat('fionna', "joe");

// function FCat(name) {
//   this.name = name;
// }

// fido = new FCat('fido');

// Cat.prototype.cuteStatement = function() {
//   return `Everyone loves ${this.name}`;
// }