function merge(array1, array2) {
  const newArr = [];

  while (array1.length > 0 && array2.length > 0){
    newArr.push(array1[0] < array2[0] ? array1.shift() : array2.shift());
  }

  return newArr.concat(array1, array2);
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let pivot = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0, pivot));
  let right = mergeSort(array.slice(pivot));

  return merge(left, right);
}

const a = [2,3,7,5,3,6,9,1];

console.table(mergeSort(a));

module.exports = {
    merge,
    mergeSort
};