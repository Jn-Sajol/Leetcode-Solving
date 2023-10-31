
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