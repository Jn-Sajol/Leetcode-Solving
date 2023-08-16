// DP
var canJump = function(nums) {
    let n = nums.length

    let dp = new Array(n).fill(-1)

    let helper = function(i) {
        if (i == n-1) return 1
        if (i >= n || nums[i] == 0) return 0
        if (dp[i] != -1) return dp[i]
        for (let k = nums[i]; k > 0;  k--) {
            dp[i+k] = helper(i+k)
            if (dp[i+k]) return 1
        }
        return 0
    }

    return helper(0)
};
canJump();