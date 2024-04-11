//wrtie the shortest average function that takes an array of numbers and returns the average of the numbers
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

function avg(a) {
  //   let sum =0;
  //   for(let i =0; i < a.length; i++){
  //     sum += a[i]
  //   }
  //return sum/a.length;
  return a.reduce((sum, num) => sum + num, 0) / a.length;
}
