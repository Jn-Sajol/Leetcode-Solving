
var maxProfit = function(prices) {
    let buy = prices[0] 
    let maxProfit = 0;
    for(let i=0; i<prices.length; i++) {
        if(prices[i]-buy > maxProfit) {
            maxProfit = prices[i]-buy
        }
        if(prices[i] < buy) {
            buy = prices[i]
        }
      }
      return maxProfit
 };

 maxProfit()