
var calculateMinimumHP = function(dungeon) {
    const n = dungeon.length, m = dungeon[0].length;
    
    const dp = new Array(n+1).fill(0).map(()=>new Array(m+1).fill(Infinity));
    
    dp[n][m-1] = dp[n-1][m] = 1;
    
    for(let i = n-1; i >= 0; i--){
        for (let j = m-1; j >= 0; j--){
            let minn = Math.min(dp[i+1][j], dp[i][j+1]);
            dp[i][j] = Math.max(minn - dungeon[i][j], 1)
        }
    }
    
    return dp[0][0]
};