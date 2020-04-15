function radixSort(arr) {
  if (!(arr instanceof Array)) return null;
  
  const buckets = Array(10);

  for (let i = 0; i < 10; i++) {
    buckets[i] = [];
  }

  let finished = false;
  let digitPlace = 0;

  while(!finished){
    let exists = false;

    arr.forEach(el => {
      let stringNum = el.toString();
      if (stringNum.length > digitPlace) {
        exists = true;
        let digit = stringNum[stringNum.length - digitPlace - 1];
        buckets[digit].push(el);
      } else {
        buckets[0].push(el);
      }
    });

    arr = [];
    
    buckets.forEach((subArr, idx) => {
      arr = arr.concat(subArr);
      buckets[idx] = [];
    });

    digitPlace += 1;
    if (!exists) finished = true;
  }

  return arr;
}

const a = [1,23,1234,17,51,6,123,4,72,13,42];
console.log(radixSort(a));

module.exports = {
    radixSort
};