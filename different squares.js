/*****
Task
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example
For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2

2 1
2 2

2 2
2 2

2 2
1 2

2 2
2 3

2 3
2 1
Input/Output
[input] 2D integer array matrix

Constraints:

1 ≤ matrix.length ≤ 100,

1 ≤ matrix[i].length ≤ 100,

0 ≤ matrix[i][j] ≤ 9.

[output] an integer

The number of different 2 × 2 squares in matrix.*/



function count2x2Squares(matrix) {
  // Initialize a variable to store the count of 2x2 squares
  let count = 0;

  // Loop through the rows of the matrix
  for (let i = 0; i < matrix.length - 1; i++) {
    // Loop through the columns of the matrix
    for (let j = 0; j < matrix[i].length - 1; j++) {
      // Check the 2x2 square formed by the current position and its neighbors
      const square = [
        matrix[i][j], matrix[i][j + 1],
        matrix[i + 1][j], matrix[i + 1][j + 1]
      ];

      // Convert the square to a Set to count unique values
      const uniqueValues = new Set(square);
      console.log(uniqueValues)
      // If there are 4 unique values, it's a different 2x2 square
      if (uniqueValues.size === 4) {
        count++;
      }
    }
  }

  return count;
}
console.log(count2x2Squares([[1, 2, 1],[2, 2, 2],[2, 2, 2],[1, 2, 3],[2, 2, 1]]))