Array.prototype.bubbleSort = function() {
  let unsorted = true;

  while (unsorted) {
    unsorted = false;

    for (let index = 0; index < this.length-1; index++) {
      if (this[index] > this[index+1]) {
        let temp = this[index];
        this[index] = this[index+1];
        this[index+1] = temp;
        unsorted = true;
      }
    }
  }

  return this;
}

String.prototype.substrings = function() {
  let subs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j <= this.length; j++) {
      subs.push(this.slice(i, j));
    }
  }

  return subs;
}