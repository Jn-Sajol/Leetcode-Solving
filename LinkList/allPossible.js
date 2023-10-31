/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const dp = new Array(21).fill(-1);
dp[1] = [new TreeNode()];
var allPossibleFBT = function(n) {
    if(dp[n]!=-1)
        return dp[n];
    let ret = [];

};