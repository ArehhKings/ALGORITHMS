/*W
Question:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. 
*/
function findAverage(array) {
  // your code here
  let sum = 0;
  if (array.length === 0) {
    return 0;
  }
  for (let num = 0; num < array.length; num++) {
    sum += array[num];
  }
  let aveArray = sum / array.length;
  return aveArray;
}

/***********************************************/

const find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};

function getDivisorsCnt(n) {
  let count = [...Array(n + 1)];
  console.log(count);
  count.forEach((num) => (num % 2 === 0 ? count++ : count--));
  console.log;
}
console.log(getDivisorsCnt(1200));
