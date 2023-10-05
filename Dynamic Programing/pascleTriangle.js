/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // initilize the result array
    let dp = []

    for (let i = 0; i < numRows; i++) {
        // Setup for each new row
        // We know that each row will have first and last number set to 1
        dp[i] = []
        dp[i][0] = 1
        dp[i][i] = 1
        for (let j = 1; j < i; j++) {
            dp[i][j] = dp[i-1][j] + dp[i-1][j-1]
        }
    }

    return dp
};