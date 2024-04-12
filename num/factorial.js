// function to calculate factorial of a number
// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }
//

// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     if (num > 1) {
//       return num * factorial(num - 1);
//     }
//   }
// }

function factorial(num) {
  return num === 0 || num === 1
    ? 1
    : num > 1
    ? num * factorial(num - 1)
    : "The number is not a positive integer.";
}

console.log(factorial(-5));

// give an example of a callback function
function greeting(name, callback) {
  console.log("Hello " + name);
}

function processUserInput(callback) {
  const name = "John";
  callback(name);
}

//processUserInput(greeting);
