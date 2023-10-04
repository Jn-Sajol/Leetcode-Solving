var minDistance = function(word1, word2) {
    let dp = Array(word1.length+1).fill(null).map(()=>(Array(word2.length+1).fill(0)));

    for (let i=0;i<dp.length;i++) {
        dp[i][0] = i
    }

    for (let i=0;i<dp[0].length;i++) {
        dp[0][i] = i
    }

};