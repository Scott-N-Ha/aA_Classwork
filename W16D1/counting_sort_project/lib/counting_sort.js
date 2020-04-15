function countingSort(arr, max) {
  const buckets = Array(max+1);

  for (let i = 0; i < buckets.length; i++){
    buckets[i] = [];
  }

  arr.forEach(num => {
    buckets[num].push(num);
  });

  return buckets.reduce((acc, subArr) => acc.concat(subArr), []);
}

const a = [3,1,4,5,1,1,2,7,8,6,4,3,1,5,6,2,3];
console.table(countingSort(a, 8));

module.exports = {
    countingSort
};