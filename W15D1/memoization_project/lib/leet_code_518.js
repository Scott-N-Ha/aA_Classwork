// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// function change(amount, coins, memo = {}) {
//   coins = coins.reverse();

//   let ways = 0;

//   coins.forEach(coin => {
//     let biggestChunk = Math.floor(amount / coin);
//     let remainder = amount % coin;

//     while (biggestChunk > 0){
//       ways += 1 + memo[remainder];
      
//       biggestChunk = 
//     }
//   });

//   return ways;
// };

function change(amount, coins) {
  const n = coins.length;
  const hash = Array(amount+1).fill(0);
  
  hash[0] = 1;
  
  for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
          hash[i] += hash[i-coin];
          // console.table(hash);
          console.log(coin, i, i-coin, hash[i-coin])
      }
  }
  
  return hash[amount];
};

console.log(change(500, [3,5,7,8,9,10,11]));