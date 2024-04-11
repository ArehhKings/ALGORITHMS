//calculate the maximum number of the given numbers in an array
// function maxNum(array) {
//   return Math.max(...array);
// }

function maxNum(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}
console.log(maxNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(maxNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]));
console.log(maxNum([1, 2, 3, 4, 5, 1001, 7, 8, 9, 10, 100, 1000]));
