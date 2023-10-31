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
    for(let i=1;i<n;i+=2){
        let ltrees = allPossibleFBT(i);
        let rtrees = allPossibleFBT(n-i-1);
        for(let j=0;j<ltrees.length;j++)
            for(let k=0;k<rtrees.length;k++)
                ret.push(new TreeNode(0,ltrees[j],rtrees[k]));
    }
    dp[n]=ret;
    return ret;
};