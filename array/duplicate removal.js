/*  

Question:

Write a function that accepts an array of number as parameter, 
and it returns array after removing all duplicated numbers.
Example removeDuplication([1,2,3,2,4,6,2,6,7]) Output [1,3,4,7].

Here 2,6 are duplicated in array, so we should remove all numbers that are duplicated.
 The output will be 1,3,4,7 after removing 2,6.

Input : [1,2,1,2,1,1,2,2] , Output : [].

Input : [2,5,6,7,5,2,6] , Output: [7].

*/
function removeDuplication(arr) {
  // Create an object to store the count of each element
  const countObj = {};

  // Create an empty array to store the result
  let result = [];

  // Loop through the given array
  for (let i = 0; i < arr.length; i++) {
    const curEle = arr[i]; // Get the current element

    // Make sure the current element is a number
    if (typeof curEle === "number")
      if (!countObj[curEle]) {
        // Check if the element is not in the countObj, and initialize its count to 1
        countObj[curEle] = 1;
      } else {
        // If the element is already in countObj, increment its count
        countObj[curEle]++;
      }
  }
  // Loop through the original array again
  for (let i = 0; i <= arr.length; i++) {
    const el = arr[i]; // Get the current element

    // If the count of the element is 1, add it to the result array (unique)
    if (countObj[el] === 1) {
      result.push(el);
    }
  }
  return result; // Return the array containing unique values
}

function removeDuplication(arr) {
  return arr.filter((val) => arr.indexOf(val) === arr.lastIndexOf(val));
}

function removeDuplication(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplication([1, 1, 3, 4, 4, 5, 6, 6, 7, 8, 3, 2]));

//another solution using the filter method
//const removeDuplication = arr =>
// arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val));
