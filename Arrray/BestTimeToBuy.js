/**
 * @param {number[]} prices
 * @return {number}
 */
const inf = 1e9+7;
const f = (i,s,txn,n,a,dp) =>{
  if(i === n || txn === 2) return 0; 
  if(dp[i][s][txn] !== inf) return dp[i][s][txn] ; 
  let ans = 0 ; 
  if(s===0) ans = f(i+1,1,txn,n,a,dp) - a[i];
  else if(s===1) ans = f(i+1,0,txn+1,n,a,dp) + a[i]; 
  ans = Math.max(ans, f(i+1,s,txn,n,a,dp));
  return dp[i][s][txn] = ans;
}
var maxProfit = function(prices) {
    let n = prices.length , dp = [] ; 
    for(let i=0;i<=n;i++){
      let arr = [] ; 
      for(let i=0;i<3;i++)arr.push(new Array(3).fill(inf)); 
      dp.push(arr);
    }
    console.log({dp}) 
    return f(0,0,0,n,prices,dp);
};
maxProfit();