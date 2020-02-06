Array.prototype.uniq = function() {
  let arr = [];
  for (let index = 0; index < this.length; index++) {
    if (!arr.includes(this[index])) {
      arr.push(this[index]);
    }
  }
  return arr;
}

Array.prototype.twoSum = function() {
  let arr = [];

  for (let i = 0; i < this.length-1; i++) {
    for (let j = i+1; j < this.length; j++) {
     if (this[i] + this[j] === 0) {
      arr.push([i, j]);
     } 
    }
  }

  return arr;
}

Array.prototype.transpose = function() {
  let arr = [];
  let rows = this[0].length;
  let cols = this.length;

  for (let i = 0; i < rows; i++) {
    let new_row = [];

    for (let j = 0; j < cols; j++) {
      new_row.push(this[j][i]);
    }

    arr.push(new_row);
  }

  return arr;
}