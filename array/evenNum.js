//function that takes an array of numbers and returns an array of only the even numbers
function evenNum(array) {
  return array.filter((num) => num % 2 === 0);
}

// function evenNum(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
