function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array[0];
  array = array.slice(1);

  const left = quickSort(array.filter(el => el < pivot));
  const right = quickSort(array.filter(el => el >= pivot));

  return left.concat([pivot], right);
}

const a = [6,3,1,34,8,4];

console.table(quickSort(a));

module.exports = {
    quickSort
};