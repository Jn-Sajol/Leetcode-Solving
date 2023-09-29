
var rob = function(root) {
    
    function dfs(root){

        if(!root){
            return [0,0]
        }

        var leftPair = dfs(root.left)
        var rightPair = dfs(root.right)

        var withRoot = root.val + leftPair[1] + rightPair[1]
        var withoutRoot = Math.max(leftPair[0],leftPair[1]) + Math.max(rightPair[0],rightPair[1])

        x = [withRoot, withoutRoot]
        return x
    }
    a = dfs(root)
    console.log(a)

    return Math.max(a[0],a[1])


};
rob()