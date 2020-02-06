function range(start, end) {
  if (start === end) {
    return [end];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(arr){
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumRec(arr.slice(1, arr.length));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * exponent(base, exp-1);
}

// function fibonacci(n) {
//   if (n === 1){
//     return [1];
//   }
//   else if (n === 2) {
//     return [1,1];
//   }

//   let fib_nums = fibonacci(n-1);

// }