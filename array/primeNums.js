// // program to check if a number is prime or not

// // take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }

// program to print prime numbers between the two numbers

// take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber

// *********************************************************

function printPrimeNum(num) {
  // let lowerNumber = 10;
  // let higherNumber = 30;

  // console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
  for (let i = 0; i <= num; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      console.log(i);
    }
  }
}

console.log(printPrimeNum(11));

// *********************************************************

// A function to check if a number is prime or not
function isPrime(n) {
  // If n is less than 2, it is not prime
  if (n < 2) {
    return false;
  }
  // Loop from 2 to the square root of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // If n is divisible by i, it is not prime
    if (n % i == 0) {
      return false;
    }
  }
  // If none of the above conditions are met, n is prime
  return true;
}

// *********************************************************

// A function to list prime numbers up to a limit
function listPrime(limit) {
  // Create an empty array to store the prime numbers
  let primes = [];
  // Loop from 2 to the limit
  for (let i = 2; i <= limit; i++) {
    // If i is prime, push it to the array
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  // Return the array of prime numbers
  return primes;
}

// Test the code with a limit of 20
console.log(listPrime(20));

/************************************* */

function capitalize(str) {
  let words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

console.log(capitalize("hello word"));

/************************************* */

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagrams("they see", "the eyes"));
