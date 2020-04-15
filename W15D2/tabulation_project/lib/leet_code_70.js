// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n, memo = {}) {
  let climb = 0;
  let stairs = 1;
  
  for (let i = 0; i < n; i++){
    [climb, stairs] = [stairs, stairs+climb];
  }
  
  return stairs;
};

console.log(climbStairs(69));