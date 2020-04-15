// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const matrix = [];
  for (let i = 0; i < m; i++) {
    matrix.push(Array(n).fill(0));
  }

  matrix[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) {
    matrix[i][0] = matrix[i - 1][0] + grid[i][0];
  }
  
  for (let i = 1; i < n; i++) {
    matrix[0][i] = matrix[0][i - 1] + grid[0][i];
  }

  console.table(matrix)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = Math.min(matrix[i - 1][j] + grid[i][j], matrix[i][j - 1] + grid[i][j]);
    }
  }

  console.table(matrix)

  return matrix[m - 1][n - 1];
}

const grid = [
  [7, 0, 8, 8, 0, 3, 5, 8, 5, 4],
  [4, 1, 2, 9, 9, 6, 0, 8, 6, 9],
  [9, 7, 1, 1, 0, 1, 2, 4, 1, 7]
];

console.log(minPathSum(grid));