
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

allPossibleFBT()

/**Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.

Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.

A full binary tree is a binary tree where each node has exactly 0 or 2 children.

 

Example 1:


Input: n = 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
Example 2:

Input: n = 3
Output: [[0,0,0]]
 

Constraints:

1 <= n <= 20 */