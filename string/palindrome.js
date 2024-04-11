// check if the given string is a palindrome

// function isPalindrome(str) {
//   let reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// }

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// function isPalindrome(str) {
//   return str === [...str].reverse().join("");
// }

// function isPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("level"));
console.log(isPalindrome("world"));
console.log(isPalindrome("hello world"));
console.log(isPalindrome("hello world hello world"));
