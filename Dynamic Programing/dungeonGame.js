/**
 * @param {number[][]} dungeon
 * @return {number}
 */

var calculateMinimumHP = function(dungeon) {
    const n = dungeon.length, m = dungeon[0].length;
    
    const dp = new Array(n+1).fill(0).map(()=>new Array(m+1).fill(Infinity));
    
    dp[n][m-1] = dp[n-1][m] = 1;
    
 
};