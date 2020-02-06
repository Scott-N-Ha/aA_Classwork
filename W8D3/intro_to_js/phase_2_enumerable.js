Array.prototype.myEach = function(prc) {
  for (let index = 0; index < this.length; index++) {
    prc(this[index]);
  }
}

function doubler(ele) {
  return ele * 2;
}

Array.prototype.myMap = function(prc) {
  let arr = [];
  for (let index = 0; index < this.length; index++) {
    arr.push(prc(this[index]));
  }
  return arr;
}

Array.prototype.myReduce = function(prc, optional) {
  var startIndex = 1; 
  var total = this[0];
  
  if (optional !== undefined) {
    total = optional;
    startIndex = 0;
  }

  while (startIndex < this.length) {
    total = prc(total, this[startIndex]);
    startIndex += 1;
  }

  return total; 
}
