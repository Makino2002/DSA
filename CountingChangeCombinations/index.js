function countChange(coins, money) {
  const dp = new Array(coins + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < money.length; i++) {
    for (let j = money[i]; j <= coins; j++) {
      console.log(i, j, money[i], dp[i]);

      dp[j] += dp[j - money[i]];
      console.log(" ", i, j - money[i], dp[j]);
    }
  }

  return dp[coins];
}
console.log(countChange(4, [1, 2, 3]));
